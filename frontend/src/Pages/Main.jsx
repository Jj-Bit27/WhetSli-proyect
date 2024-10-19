/* Bibliotecas */
import { Link } from "react-router-dom";

function Main() {
  /* Regresamos la pagina */
  return (
    <>
      <section className="h-screen w-screen bg-slate-100 content-center text-center dark:bg-zinc-900">
        {/*<CardLanding />*/}
        <h1 className="text-7xl font-EduVICWANTBeginner dark:text-white">
          Whet
          <span className="text-7xl font-metamasie dark:text-white">SLi</span>
        </h1>
        <div className="flex flex-wrap flex-row justify-center text-white bg-transparent py-3">
          <Link
            to="/login"
            className="bg-stone-800 p-4 m-5 rounded-br-lg rounded-tl-lg text-xl hover:bg-emerald-600 cursor-pointer transition-all duration-300 ease-linear 
        dark:bg-slate-300 dark:text-black dark:hover:bg-emerald-600 dark:hover:text-white dark:transition-all dark:duration-300"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/signup"
            className="bg-stone-800 p-4 m-5 rounded-br-lg rounded-tl-lg text-xl hover:bg-emerald-600 cursor-pointer transition-all duration-300 ease-linear
        dark:bg-slate-300 dark:text-black dark:hover:bg-emerald-600 dark:hover:text-white dark:transition-all dark:duration-300"
          >
            Registrarse
          </Link>
        </div>
      </section>
    </>
  );
}

export default Main;
