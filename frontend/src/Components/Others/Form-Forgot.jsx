/* Bibliotecas */
import React from "react";
import { Link } from "react-router-dom";
import { FaMailBulk, FaArrowCircleLeft } from "react-icons/fa";

/* Componentes */
import Input from "./Input";

function CardForgotPassword({
  email,
  setEmail,
  isSubmitted,
  isLoading,
  handleSubmit,
  error,
  message,
}) {
  /* Regresamos la pagina */
  return (
    <div className="max-w-md w-full md:w-auto m-4 md:m-0 h-auto bg-slate-400 dark:bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Contraseña Olvidada
        </h2>
        {!isSubmitted ? (
          <>
            {error && (
              <p className="text-white font-semibold mt-2 text-center bg-red-500 p-2 mb-4 rounded-2xl">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <p className="text-emerald-500 dark:text-emerald-400 mb-6 text-center">
                Ingresa tu correo y te enviaremos un enlace para restablecer tu
                contraseña.
              </p>
              <Input
                icon={FaMailBulk}
                type="email"
                placeholder="Dirección de Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                type="submit"
              >
                {isLoading ? "Cargando" : "Enviar Enlace de Restablecimiento"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMailBulk className="h-8 w-8 text-white" />
            </div>
            <p className="text-gray-300 mb-6">
              Si ya tiene una cuenta para {email}, recibirá un enlace para
              restablecer su contraseña en breve.
            </p>
          </div>
        )}
      </div>

      <div className="px-8 py-4 bg-slate-400 dark:bg-zinc-900 bg-opacity-50 flex justify-center">
        <Link
          to={"/login"}
          className="text-sm text-emerald-500 dark:text-emerald-400 hover:underline flex items-center"
        >
          <FaArrowCircleLeft className="h-4 w-4 mr-2" /> Regresar Al Login
        </Link>
      </div>
    </div>
  );
}

export default CardForgotPassword;
