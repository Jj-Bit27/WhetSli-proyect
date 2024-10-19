/* Bibliotecas */
import { BsGearFill } from "react-icons/bs";
import { IoChatbox, IoPerson } from "react-icons/io5";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaHome,
  FaUpload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

/* Componentes */
import useDarkMode from "./Darkmode.jsx";
import { useAuth } from "../../Utils/userAuth.js";

/* Sidebar */
function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú en móviles
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para verificar si es móvil

  /* Efecto para manejar el cambio de tamaño de pantalla */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Cerrar el menú en pantallas grandes
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev); // Alternar menú

  const { isAuthenticated, user } = useAuth(); // Datos del usuario

  return (
    <div className="relative">
      {isMobile ? (
        <div className="fixed bottom-4 left-4">
          {/* Botón flotante para versión móvil */}
          <button
            onClick={toggleMenu}
            className="p-3 ml-1 bg-transparent hover:bg-emerald-600 text-emerald-500 hover:text-white hover:rounded-xl rounded-3xl cursor-pointer transition-all duration-300 ease-linear
          dark:bg-zinc-800 dark:hover:bg-emerald-600 shadow-lg md:hidden"
          >
            {isOpen ? <FaTimes size="20" /> : <FaBars size="20" />}
          </button>

          {/* Menú lateral normal en pantallas más grandes */}
          <div
            className={`fixed ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0 pointer-events-none"
            }
            md:translate-y-0 md:opacity-100 md:flex top-auto bottom-16 left-[11px] transform transition-all duration-300 ease-in-out w-16 flex-col bg-slate-300 shadow-lg rounded-3xl dark:bg-zinc-800`}
          >
            <MenuItems isAuthenticated={isAuthenticated} user={user} />
          </div>
        </div>
      ) : (
        /* Menu En Pantallas Grandes */
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 h-auto w-16 flex flex-col bg-slate-300 shadow-lg rounded-3xl dark:bg-zinc-800 ">
          <MenuItems isAuthenticated={isAuthenticated} user={user} />
        </div>
      )}
    </div>
  );
}

/* Opciones de la navegacion */
const MenuItems = ({ isAuthenticated, user }) => (
  <>
    {/* Inicio */}
    <NavLink
      to={isAuthenticated && user.isVerified ? "/home" : "/"}
      className="bg-transparent"
    >
      <SideBarIcon
        icon={<FaHome size="20" className="bg-transparent" />}
        text="Inicio"
      />
    </NavLink>
    {/* Busqueda */}
    <NavLink to="/search">
      <SideBarIcon
        icon={<FaSearch size="20" className="bg-transparent" />}
        text="Busqueda"
      />
    </NavLink>
    {/* Chats */}
    <NavLink to="/chats">
      <SideBarIcon
        icon={<IoChatbox size="20" className="bg-transparent" />}
        text="Chats"
      />
    </NavLink>
    <Divider />
    {/* Subir Archivos */}
    <NavLink to="/update-file">
      <SideBarIcon
        icon={<FaUpload size="20" className="bg-transparent" />}
        text="Subir"
      />
    </NavLink>
    <Divider />
    {/* Color De Tema */}
    <ThemeIcon />
    {/* Configuracion */}
    <NavLink to="/settings">
      <SideBarIcon
        icon={<BsGearFill size="20" className="bg-transparent" />}
        text="Configuracion"
      />
    </NavLink>
    {/* Perfil */}
    <NavLink to="/profile">
      <SideBarIcon
        icon={<IoPerson size="20" className="bg-transparent" />}
        text="Perfil"
      />
    </NavLink>
  </>
);

/* Boton de cambiar modo */
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode} className="bg-transparent">
      {darkTheme ? (
        <SideBarIcon
          icon={<FaSun size="20" className="bg-transparent" />}
          text="Modo Claro"
        />
      ) : (
        <SideBarIcon
          icon={<FaMoon size="20" className="bg-transparent" />}
          text="Modo Oscuro"
        />
      )}
    </span>
  );
};

/* Modificacion de Iconos */
const SideBarIcon = ({ icon, text }) => (
  <div
    className="relative group flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-transparent hover:bg-emerald-600 text-emerald-500 hover:text-white hover:rounded-xl rounded-3xl cursor-pointer transition-all duration-300 ease-linear
   dark:bg-zinc-800 dark:hover:bg-emerald-600"
  >
    {icon}
    <span
      className="absolute group-hover:scale-100 w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-black bg-slate-300 text-xs font-bold scale-0 origin-left transition-all duration-100
      dark:bg-zinc-800 dark:text-white"
    >
      {text}
    </span>
  </div>
);

/* Separador */
const Divider = () => (
  <hr className="bg-slate-400 border border-slate-400 dark:border-neutral-700 dark:bg-neutral-700 rounded-full mx-2" />
);

/* Exportamos */
export default SideBar;
