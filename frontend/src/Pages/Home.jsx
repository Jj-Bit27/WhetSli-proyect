/* Bibliotecas */
import React from "react";

/* Componentes */
import Carrusel from "../Components/Post/Carrusel.jsx";
import ButtonCreate from "../Components/Post/Button.jsx";

function Home() {
  /* Regresamos la pagina principal */
  return (
    <div className="h-screen w-screen bg-slate-100 dark:bg-zinc-900">
      {/*}
      <div className="w-full py-10 flex flex-row flex-wrap">
        <Carrusel />
      </div>
      {*/}
      <div className="absolute h-64 w-full ">
        <ButtonCreate />
      </div>
    </div>
  );
}

export default Home;
