/* Bibliotecas */
import React from "react";
import { FaLock } from "react-icons/fa";

/* Componentes */
import Input from "./Input";

function CardResetPassword({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  error,
  message,
  isLoading,
  handleSubmit,
}) {
  /* Regresamos la pagina */
  return (
    <div className="max-w-md w-full md:w-auto m-4 md:m-0 h-auto bg-slate-400 dark:bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Restablecer Contraseña
        </h2>
        {error && (
          <p className="text-white font-semibold mt-2 text-center bg-red-500 p-2 mb-4 rounded-xl">
            {error}
          </p>
        )}
        {message && (
          <p className="bg-emerald-500 text-white text-sm mb-4 mt-2 text-center p-2 rounded-xl">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            icon={FaLock}
            type="password"
            placeholder="Nueva Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            icon={FaLock}
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Restableciendo..." : "Configurar Nueva Contraseña"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardResetPassword;
