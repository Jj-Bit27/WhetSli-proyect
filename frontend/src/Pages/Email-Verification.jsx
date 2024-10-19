/* Bibliotecas */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/userAuth.js";
import toast from "react-hot-toast";

/* Componente */
import CardEmailVerify from "../Components/Others/Form-Verification.jsx";

const EmailVerificationPage = () => {
  /* Usamos los estados */
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { errorVerifyEmail, isLoading, verifyEmail } = useAuth();

  /* Funcion para cambiar el valor de los inputs */
  const handleChange = (index, value) => {
    const newCode = [...code];

    /* Manejar el contenido pegado */
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      /* Enfocar en el ultimo input no vacio o en el primero vacio */
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      /* Enfocar en el siguiente input si el valor es ingresado */
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  /* Funcion al dar click al boton de verificado */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Correo verificado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };

  /* Cuando los campos esten llenos se envia automaticamente */
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  /* Regresamos la pagina */
  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <CardEmailVerify
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleSubmit={handleSubmit}
        code={code}
        error={errorVerifyEmail}
        isLoading={isLoading}
        inputRefs={inputRefs}
      />
    </section>
  );
};
export default EmailVerificationPage;
