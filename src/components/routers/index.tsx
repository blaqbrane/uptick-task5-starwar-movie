import { lazy, Suspense } from 'react'
const Home = lazy(() => import('../../features/home')) 
const AllMovies = lazy(() => import ('../../features/movies')) 
const SignUp  = lazy(() => import ('../../features/auth/components/sign-up')) 
import {Routes, Route } from 'react-router-dom'
import { RoutePaths } from './route-path'
import PublicRoute from './public-routes'
import ProtectedRoutes from './protected-route'
import Loader from '../elements/page-loader'
import { useSelector } from 'react-redux'


const MainRouter = () => {
    const { isLoggedIn } = useSelector((store:any) => store.auth)
    return (
        <Routes>
            <Route path={RoutePaths.HOME} element={
                <PublicRoute redirectPath='/' isAllowed={true} >
                <Suspense fallback={<Loader/>}>
                    <Home/>
                </Suspense>
             </PublicRoute>
            }/>
            <Route path={RoutePaths.SIGNIN} element={
                <PublicRoute redirectPath='/' isAllowed={true} >
                <Suspense fallback={<Loader/>}>
                    <SignUp/>
                </Suspense>
             </PublicRoute>
            }/>
             <Route path={RoutePaths.MOVIES} element={
                <ProtectedRoutes redirectPath='/' isAllowed={isLoggedIn} >
                <Suspense fallback = {<Loader/>}>
                   <AllMovies/>
                </Suspense>
             </ProtectedRoutes>
            }/>
        </Routes>
    )
}

export default MainRouter