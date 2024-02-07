// React imports
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Redux imports
import { useAppSelector } from './store/store';

// Interfaces
interface AuthWrapperProps {
    children: React.ReactNode,
}

// Page content imports
const Landing = lazy(() => import('./pages/page-content/Landing'));
const Signin = lazy(() => import('./pages/page-content/Signin'));
const Signup = lazy(() => import('./pages/page-content/Signup'));
const Signout = lazy(()=>import ('./pages/page-content/Signout'));
const NotFound = lazy(() => import('./pages/page-content/NotFound'));
const Profile = lazy(() => import('./pages/page-content/Profile'));
const Account = lazy(() => import('./pages/Account/Account.page'));

// Page layout imports
const LandingLayout = lazy(()=>import ('./pages/layouts/LandingLayout'));
const SigninLayout = lazy(()=>import ('./pages/layouts/SigninLayout'));
const ProfileLayout = lazy(()=>import ('./pages/layouts/ProfileLayout'));


const AppRouter = () => {
    const authStatus = useAppSelector((state)=>state.auth.authStatus);

    const RequiredAuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
        if (authStatus) return <>{children}</>;
        else return <Navigate to="/signin" replace/>;
    }

    const ForbiddenAuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
        if (authStatus) return <Navigate to="/" replace />;
        else return <>{children}</>;
    }

    return (
        <Router>
          <Routes>
            <Route path='/' 
                element={
                    <Suspense fallback={<></>}>
                        <LandingLayout childComponent={Landing} />
                    </Suspense>
                } 
            />
            <Route path='/signin' 
                element={
                    <Suspense fallback={<></>}>
                        <ForbiddenAuthWrapper children={
                            <SigninLayout childComponent={Signin} />
                        } />
                    </Suspense>
                } 
            />
            <Route path='/signup' 
                element={
                    <Suspense fallback={<></>}>
                        <ForbiddenAuthWrapper children={
                            <SigninLayout childComponent={Signup} />
                        } />
                    </Suspense>
                } 
            />
            <Route path='/signout' 
                element={
                    <Suspense fallback={<></>}>
                        <RequiredAuthWrapper children={
                            <Signout />
                        } />
                    </Suspense>
                } 
            />
            <Route path='/profile' 
                element={
                    <Suspense fallback={<></>}>
                        <RequiredAuthWrapper children={
                            <ProfileLayout childComponent={Profile} />
                        } />
                    </Suspense>
                } 
            />
            <Route path='/account' 
                element={
                    <Suspense fallback={<></>}>
                        <RequiredAuthWrapper children={
                            <ProfileLayout childComponent={Account} />
                        } />
                    </Suspense>
                } 
            />
            <Route path='*' 
                element={
                    <Suspense fallback={<></>}>
                        <NotFound />
                    </Suspense>
                }
            />
          </Routes>
        </Router>
    );
  };
  
  export default AppRouter;
