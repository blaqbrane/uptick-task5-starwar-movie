import React, { ReactNode, Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectRoutesI{
    isAllowed:boolean 
    children:ReactNode 
    redirectPath: string
}
const ProtectedRoutes:React.FC<ProtectRoutesI> = ({isAllowed,redirectPath='/', children}) => {
  if(!isAllowed){
    return <Navigate to={redirectPath} replace/>
  }
  return children ? <Suspense fallback = 'Loading Page'> <>{children}</> </Suspense> : <Outlet/>
}
export default ProtectedRoutes 