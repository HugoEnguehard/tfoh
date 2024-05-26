// React imports
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Redux imports
import { useAuth } from './context/AuthProvider.context';

// Interfaces
interface AuthWrapperProps {
    children: React.ReactNode,
}

// Page content imports
const Landing = lazy(() => import('./pages/page-content/Landing'));
const Signin = lazy(() => import('./pages/signin'));
const Signup = lazy(() => import('./pages/signup'));
const Signout = lazy(()=>import ('./pages/page-content/Signout'));
const NotFound = lazy(() => import('./pages/page-content/NotFound'));
const Profile = lazy(() => import('./pages/page-content/Profile'));
const Account = lazy(() => import('./pages/account/Account.page'));
const Personnages = lazy(() => import('./pages/personnages'));

// Page layout imports
const LandingLayout = lazy(()=>import ('./pages/layouts/landing-layout'));
const SigninLayout = lazy(()=>import ('./pages/layouts/signin-layout'));
const ProfileLayout = lazy(()=>import ('./pages/layouts/ProfileLayout'));


const AppRouter = () => {
    const { isAuthentificated } = useAuth();

    const RequiredAuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
        if (isAuthentificated) return <>{children}</>;
        else return <Navigate to="/signin" replace/>;
    }

    const ForbiddenAuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
        if (isAuthentificated) return <Navigate to="/" replace />;
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
            <Route path='/characters' 
                element={
                    <Suspense fallback={<></>}>
                        <RequiredAuthWrapper children={
                            <ProfileLayout childComponent={Personnages} />
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
