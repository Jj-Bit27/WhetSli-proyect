/* Bibliotecas */
import React from "react";
import { Link } from "react-router-dom";
import { FaMailBulk, FaLock, FaUser } from "react-icons/fa";

/* Componentes */
import PasswordStrengthMeter from "./Password-Meters.jsx";
import Input from "./Input";

function FormRegister({
  handleSignup,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  error,
  isLoading,
}) {
  /* Regresamos la pagina */
  return (
    <div
      className="max-w-md w-full m-4 md:m-0 h-auto max-h-[600px] bg-slate-400 dark:bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden"
    >
      <div className="py-4 px-6 md:p-8">
        <h2 className="text-3xl font-bold mb-2 md:mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Crear Cuenta
        </h2>
        {error && (
          <p className="text-white font-semibold mt-2 text-center bg-red-500 p-2 mb-4 rounded-2xl">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup}>
          <Input
            icon={FaUser}
            type="text"
            placeholder="Nombre de usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={FaMailBulk}
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={FaLock}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordStrengthMeter password={password} />

          <button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Registrarse"}
          </button>
        </form>
      </div>
      <div className="px-8 py-2 bg-slate-400 dark:bg-zinc-900 bg-opacity-20 flex justify-center">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Ya tienes una cuenta?{" "}
          <Link
            to={"/login"}
            className="text-emerald-500 dark:text-emerald-400 hover:underline"
          >
            Accede
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormRegister;
