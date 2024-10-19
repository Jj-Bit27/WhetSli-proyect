/* Bibliotecas */
import { useState } from "react";
import { useAuth } from "../Utils/userAuth.js";

/* Componentes */
import CardForgotPassword from "../Components/Others/Form-Forgot.jsx";

const ForgotPasswordPage = () => {
  /* Estados */
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    isLoading,
    forgotPassword,
    errorForgotPassword,
    messageForgotPassword,
  } = useAuth();

  /* Funcion para enviar el correo de recuperacion */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  /* Regresamos la pagina */
  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <CardForgotPassword
        email={email}
        setEmail={setEmail}
        isSubmitted={isSubmitted}
        isLoading={isLoading}
        error={errorForgotPassword}
        message={messageForgotPassword}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
export default ForgotPasswordPage;
