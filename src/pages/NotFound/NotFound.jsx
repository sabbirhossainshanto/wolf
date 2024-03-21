import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useContextState from "../../hooks/useContextState";
import { Settings } from "../../api";

const NotFound = () => {
  const location = useLocation();
  const { setShowOTP } = useContextState();
  const navigate = useNavigate();
  useEffect(() => {
    const showRegister = () => {
      if (location.pathname?.toLowerCase() === "/register") {
        if (Settings.register) {
          setShowOTP(true);
        }
        navigate("/");
      }
    };
    showRegister();
  }, [location.pathname, navigate, setShowOTP]);

  return <Navigate to="/" replace />;
};

export default NotFound;
