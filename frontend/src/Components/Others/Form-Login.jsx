/* Bibliotecas */
import React from "react";
import { Link } from "react-router-dom";
import { FaMailBulk, FaLock } from "react-icons/fa";

/* Componentes */
import Input from "./Input";

function FormLogin({
  handleLogin,
  setEmail,
  setPassword,
  email,
  password,
  error,
  isLoading,
}) {
  /* Regresamos la pagina */
  return (
    <div className="max-w-md w-full m-4 md:m-0 h-auto bg-slate-400 dark:bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Bienvenido De Nuevo
        </h2>
        {error && (
          <p className="text-white font-semibold mt-2 text-center bg-red-500 p-2 mb-4 rounded-2xl">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
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

          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-emerald-500 dark:text-emerald-400 hover:underline"
            >
              Contraseña Olvidada?
            </Link>
          </div>

          <button
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Acceder"}
          </button>
        </form>
      </div>
      <div className="px-8 py-4 bg-slate-400 dark:bg-zinc-900 bg-opacity-20 flex justify-center">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Todavia no tienes una cuenta?{" "}
          <Link
            to="/signup"
            className="text-emerald-500 dark:text-emerald-400 hover:underline"
          >
            Ingresa Aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormLogin;
