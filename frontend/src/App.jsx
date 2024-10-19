/* Bibliotecas */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

/* Componentes */
import Sidebar from "./Components/Navbar/Side-Bar.jsx";
import Navtop from "./Components/Navbar/Nav-Top.jsx";
import { useAuth } from "./Utils/userAuth.js";

/* Paginas */
import Main from "./Pages/Main.jsx";
import NotFound from "./Pages/Not-found.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import EmailVerification from "./Pages/Email-Verification.jsx";
import ForgotPassword from "./Pages/Forgot-Password.jsx";
import ResetPassword from "./Pages/Reset-Password.jsx";
import Home from "./Pages/Home.jsx";

/* Protegemos las rutas, esto require que el usuario este autenticado */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verification-email" replace />;
  }

  return children;
};

/* Redireccionamos a los usuarios autenticados a la pagina de inicio */
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return "Cargando...";

  return (
    <BrowserRouter>
      <Navtop />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPassword />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
