import React from 'react'
import { Outlet , Navigate} from 'react-router-dom'

const ProtectRoute = () => {
  const auth = localStorage.getItem("loggin")
  return auth ? <Outlet/> : <Navigate  to={"/"}/>
}

export default ProtectRoute