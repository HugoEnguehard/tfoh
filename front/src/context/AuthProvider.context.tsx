// React imports
import { createContext, useContext, useEffect } from "react"
import { useCookies } from "react-cookie"

// Redux imports
import { useAppDispatch } from "../store/store"

// Interfaces
import SignupData from "../interfaces/SignupData.interface"
import { authentificateUser, logoutUser, registerUser } from "../store/authSlice"
import AuthUserResult from "../interfaces/AuthUserResult.interface"
import axios from "axios"
import { resetUser, setUser } from "../store/userSlice"
import UserState from "../interfaces/UserState.interface"
import SignupUserResult from "../interfaces/SignupUserResult.interface"

interface AuthMethods {
    login: (email: string, password: string) => Promise<string | null>
    register: (formData: SignupData) => Promise<string | null>
    logout: () => void
}

interface AuthContextType extends AuthMethods {
    isAuthentificated: boolean
}

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be within an AuthProvider")
    return context
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const dispatch = useAppDispatch()
    const [cookie] = useCookies(["Authorization"])

    const isAuthentificated = !!cookie["Authorization"]

    const login: AuthMethods["login"] = async (username, password) => {
        try {
            const authResponse: any = (await (
                await dispatch(authentificateUser({ username, password }))
            ).payload) as AuthUserResult

            if (authResponse.result) {
                const userProfileData: any = await (
                    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me`)
                ).data
                dispatch(setUser(userProfileData as UserState))
                return null
            } else return authResponse.message
        } catch (error: any) {
            return error.message
        }
    }

    const register: AuthMethods['register'] = async (formData) => {
        try {
            const registerResponse: any = (await (
                await dispatch(registerUser(formData))
            ).payload) as SignupUserResult

            if(registerResponse.result) return null
            else return registerResponse.message
        } catch (error: any) {
            return error.message            
        }
    }

    const logout: AuthMethods['logout'] = async () => {
        dispatch(resetUser())
        dispatch(logoutUser())
    }

    useEffect(() => {
        if(!isAuthentificated) logout()
    }, [isAuthentificated])

    const contextValue: AuthContextType = {
        isAuthentificated,
        login,
        register,
        logout,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}