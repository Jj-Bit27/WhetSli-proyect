/* Bibliotecas */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/userAuth";

/* Componente */
import FormRegister from "../Components/Others/Form-Signup.jsx";

function Register() {
  /* Usamos los estados y la navegacion */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, errorSignup, isLoading } = useAuth();

  /* Funcion que se ejecuta al dar click al boton registrarse */
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/verification-email");
    } catch (error) {
      console.log(error);
    }
  };

  /* Regresamos la pagina */
  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <FormRegister
        handleSignup={handleSignUp}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        error={errorSignup}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Register;
