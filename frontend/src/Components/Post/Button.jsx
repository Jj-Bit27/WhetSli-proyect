/* Bibliotecas */
import { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

function CreateBtn() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  /* Efecto para manejar el cambio de tamaño de pantalla */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Regresamos el boton para crear un nuevo post */
  return (
    <Link
      className="p-3 ml-1 md:w-16 md:h-16 object-cover rounded-full text-white bg-emerald-500 fixed bottom-4 right-4 flex items-center justify-center-4 px-4 py-2"
      to="/post/create"
    >
      {isMobile ? <IoAdd size="20" /> : <IoAdd size="40" />}
    </Link>
  );
}

export default CreateBtn;
