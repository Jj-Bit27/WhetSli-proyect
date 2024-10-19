/* Bibliotecas */
import { useState } from "react";
import { useAuth } from "../Utils/userAuth";

/* Componentes */
import FormLogin from "../Components/Others/Form-Login.jsx";

function Login() {
  /* Usamos los estados */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, errorLogin } = useAuth();

  /* Funcion al dar click al boton de acceder */
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  /* Regresamos la pagina */
  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <FormLogin
        setEmail={setEmail}
        setPassword={setPassword}
        isLoading={isLoading}
        error={errorLogin}
        email={email}
        handleLogin={handleLogin}
      />
    </section>
  );
}

export default Login;
