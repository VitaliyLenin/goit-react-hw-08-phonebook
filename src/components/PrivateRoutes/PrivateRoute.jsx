import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin, getToken } from 'Redux/auth/auth-selector';

const PrivateRoute = () => {
  const isUserLogin = useSelector(isLogin);
  const isToken = useSelector(getToken);

  if (!isUserLogin && isToken) {
    return <p>Loading...</p>;
  }
  if (!isUserLogin && !isToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
