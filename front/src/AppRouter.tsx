import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SuspenseLoading from './pages/page-content/SuspenseLoading';


// Lazy method allows the component to be downloaded dynamically and not by default when the page is loaded
const Landing = lazy(() => import('./pages/page-content/Landing'));
const Signin = lazy(() => import('./pages/page-content/Signin'));
const NotFound = lazy(() => import('./pages/page-content/NotFound'));
const LandingLayout = lazy(()=>import ('./pages/layouts/LandingLayout'));
const SigninLayout = lazy(()=>import ('./pages/layouts/SigninLayout'));

const AppRouter = () => {
    return (
        <Router>
          <Routes>
            <Route path='/' 
                element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <LandingLayout childComponent={Landing} />
                    </Suspense>
                } 
            />

            <Route path='/signin' 
                element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <SigninLayout childComponent={Signin} />
                    </Suspense>
                } 
            />

            <Route path='*' 
                element={
                    <Suspense fallback={<SuspenseLoading />}>
                        <NotFound />
                    </Suspense>
                }
            />
          </Routes>
        </Router>
    );
  };
  
  export default AppRouter;
