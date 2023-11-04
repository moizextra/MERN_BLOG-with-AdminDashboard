import React from 'react'
import { Navigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({children}) => { // Here ...rest is options object or parameter we pass to particular Route
  const {isLoading,isAutheticated,userData}=useSelector(state=>state.User);
  const location = useLocation();
  if( isAutheticated==false ){
    return <Navigate to="/auth" />
  }
  if (isAutheticated && location.pathname === '/auth') {
    return <Navigate to="/" />;
  }

  return children

}

export default ProtectedRoute