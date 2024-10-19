/* Importar librerias */
import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

function PostCard({ id, username, avatar, title, content, imagen }) {
  const truncatedContent = (
    <>
      {content.slice(0, 160)}
      <span className="text-blue-400"> leer más...</span>
    </>
  );

  /* Regresamos la tarjeta de publicación */
  return (
    <div className="transition-opacity duration-500 ">
      <div className="h-[400px] min-w-96 object-cover rounded-xl bg-slate-300 ml-5 dark:bg-zinc-800 p-4">
        <h1 className="text-black dark:text-white text-2xl text-center">
          {title}
        </h1>
        {imagen && (
          <img
            src={imagen}
            alt={title}
            className="w-auto h-auto max-h-52 object-cover rounded-3xl py-2"
          />
        )}
        <span className="text-black dark:text-white">
          {content.length > 160 ? truncatedContent : content}
        </span>
        <div className="flex flex-row items-center justify-between">
          <div className="mt-2 text-black dark:text-emerald-400 flex flex-row items-center">
            <Link
              className=" flex flex-row items-center cursor-pointer"
              to={"/profile/" + username}
            >
              {avatar && (
                <img
                  src={avatar}
                  alt={username}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <h3 className="ml-2">{username}</h3>
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <Link to={"/post/" + id + "/share"}>
              <FaShare
                className="text-emerald-500 cursor-pointer"
                size="18px"
              />
            </Link>
            <Link to={"/post/" + id + "/comments"}>
              <FaComment
                className="text-emerald-500 cursor-pointer"
                size="18px"
              />
            </Link>
            <Link to={"/post/" + id + "/like"}>
              <FaHeart
                className="text-emerald-500 cursor-pointer"
                size="18px"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
