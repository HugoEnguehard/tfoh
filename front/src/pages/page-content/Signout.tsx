// React imports
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Redux imports
import { useAppDispatch } from "../../store/store";
import { signOut } from "../../store/authSlice";
import { resetUser } from "../../store/userSlice";

// Interfaces
import SignOutResult from "../../interfaces/SignOutResult.store";


const Signout: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSignOut = async () => {
        const signOutResult = await dispatch(signOut());

        if(signOut.fulfilled.match(signOutResult)) {
            const signoutData = signOutResult.payload as SignOutResult;
            if (signoutData.success) {
                dispatch(resetUser());
                navigate("/signin");
            }
            else console.log(signoutData.message);
        }
    }

    useEffect(() => {
        handleSignOut();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            Loggin out...
        </>
    );
}

export default Signout;