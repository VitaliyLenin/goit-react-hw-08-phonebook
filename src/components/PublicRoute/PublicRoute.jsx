import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin, getToken } from 'Redux/auth/auth-selector';

const PublicRoute = () => {
  const isUserLogin = useSelector(isLogin);
  const isToken = useSelector(getToken);

  if (!isUserLogin && isToken) {
    return 'Loading...';
  }
  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
