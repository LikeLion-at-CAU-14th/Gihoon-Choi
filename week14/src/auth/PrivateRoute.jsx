import {getAccessToken} from "./tokenStorage";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const accessToken=getAccessToken();

    if (!accessToken) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoute;