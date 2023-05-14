/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='flex items-center justify-center h-full'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace/>
};

export default PrivateRoute;