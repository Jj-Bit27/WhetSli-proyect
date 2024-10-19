/* Bibliotecas */
import React from "react";

function CardEmailVerify({
  handleChange,
  handleKeyDown,
  handleSubmit,
  code,
  error,
  isLoading,
  inputRefs,
}) {
  /* Regresamos la pagina */
  return (
    <div className="max-w-md w-full md:w-auto m-2 md:m-0 h-auto bg-slate-400 dark:bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-slate-400 dark:bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Verificar Tu Correo
        </h2>
        {error && (
          <p className="text-white font-semibold mt-2 text-center bg-red-500 p-2 mb-4 rounded-2xl">
            {error}
          </p>
        )}
        <p className="text-center text-emerald-600 dark:text-emerald-400 mb-6">
          Ingresa el codigo de 6 numeros de verificacion que hemos enviado a tu
          correo
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold bg-slate-500 dark:bg-zinc-700 text-white border-2 border-slate-400 dark:border-zinc-600 rounded-lg focus:border-green-500 dark:focus:border-green-500 focus:outline-none"
              />
            ))}
          </div>
          <button
            type="submit"
            disabled={isLoading || code.some((digit) => !digit)}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isLoading ? "Verificando..." : "Verificar Correo"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardEmailVerify;
