/* Bibliotecas */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

/* Componentes */
import CardResetPassword from "../Components/Others/Form-Reset";
import { useAuth } from "../Utils/userAuth";

const ResetPasswordPage = () => {
  /* Estados */
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, errorResetPassword, isLoading, messageResetPassword } =
    useAuth();

  const { token } = useParams();
  const navigate = useNavigate();

  /* Funcion para enviar el formulario */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no son las mismas");
      return;
    }
    try {
      await resetPassword(token, password);

      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  /* Regresamos la pagina */
  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <CardResetPassword
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        error={errorResetPassword}
        message={messageResetPassword}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
export default ResetPasswordPage;
