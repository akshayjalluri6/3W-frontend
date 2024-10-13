import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Component }) => {
    const token = Cookies.get('jwt_token');
    
    // If token is not present, redirect to login
    if (token === undefined) {
        return <Navigate to="/login" />;
    }

    // If token is present, render the component
    return Component;
}

export default ProtectedRoute;