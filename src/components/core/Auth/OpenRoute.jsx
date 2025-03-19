// This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useEffect } from "react";

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    console.log("Token updated in OpenRoute:", token);
  }, [token]); // Logs whenever token changes


  if (!token) {
    return children
  } else {
    return <Navigate to="/dashboard/my-profile" />
  }
}

export default OpenRoute