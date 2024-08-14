
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
   else{
    return <Navigate to='/login'></Navigate>
   }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;