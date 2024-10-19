/* Importaciones */
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

/* Componentes */
import CardPost from "./Card";

const PostCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posts = [
    {
      id: 1,
      title: "Publicación 1",
      username: "Usuario 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus beatae adipisci obcaecati quam ullam temporibus natus vero aliquid. Incidunt commodi quod iste in id veritatis, enim maiores temporibus dolor nemo. Saepe ipsum quo dolorum odio, autem in adipisci ratione animi ut voluptatibus quod incidunt quos voluptates ea blanditiis tempora omnis. Beatae eius asperiores ex distinctio illum autem officia culpa expedita nesciunt deserunt voluptas, in, quod illo eos nobis maiores? Officiis, obcaecati eveniet recusandae optio vero ipsam? Ut nam quo quis? Ipsum blanditiis distinctio impedit eius mollitia maiores eum autem at. Animi deleniti fugiat aliquam quisquam, maiores tenetur asperiores earum architecto praesentium exercitationem tempore harum rem! Commodi a, quaerat odio tempora et, nesciunt facilis neque animi possimus placeat illo amet in non repudiandae praesentium qui, voluptate ullam distinctio quibusdam. Quod, earum fuga rerum aliquam quo unde minus odit? Blanditiis suscipit repudiandae itaque tenetur. Optio tempore sint aliquam, provident est itaque.",
      image:
        "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Publicación+1",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      title: "Publicación 2",
      username: "Usuario 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus beatae adipisci obcaecati quam ullam temporibus natus vero aliquid. Incidunt commodi quod iste in id veritatis, enim maiores temporibus dolor nemo. Saepe ipsum quo dolorum odio, autem in adipisci ratione animi ut voluptatibus quod incidunt quos voluptates ea blanditiis tempora omnis. Beatae eius asperiores ex distinctio illum autem officia culpa expedita nesciunt deserunt voluptas, in, quod illo eos nobis maiores? Officiis, obcaecati eveniet recusandae optio vero ipsam? Ut nam quo quis? Ipsum blanditiis distinctio impedit eius mollitia maiores eum autem at. Animi deleniti fugiat aliquam quisquam, maiores tenetur asperiores earum architecto praesentium exercitationem tempore harum rem! Commodi a, quaerat odio tempora et, nesciunt facilis neque animi possimus placeat illo amet in non repudiandae praesentium qui, voluptate ullam distinctio quibusdam. Quod, earum fuga rerum aliquam quo unde minus odit? Blanditiis suscipit repudiandae itaque tenetur. Optio tempore sint aliquam, provident est itaque.",
      image:
        "https://via.placeholder.com/400x200/33FF57/FFFFFF?text=Publicación+2",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      title: "Publicación 3",
      username: "Usuario 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus beatae adipisci obcaecati quam ullam temporibus natus vero aliquid. Incidunt commodi quod iste in id veritatis, enim maiores temporibus dolor nemo. Saepe ipsum quo dolorum odio, autem in adipisci ratione animi ut voluptatibus quod incidunt quos voluptates ea blanditiis tempora omnis. Beatae eius asperiores ex distinctio illum autem officia culpa expedita nesciunt deserunt voluptas, in, quod illo eos nobis maiores? Officiis, obcaecati eveniet recusandae optio vero ipsam? Ut nam quo quis? Ipsum blanditiis distinctio impedit eius mollitia maiores eum autem at. Animi deleniti fugiat aliquam quisquam, maiores tenetur asperiores earum architecto praesentium exercitationem tempore harum rem! Commodi a, quaerat odio tempora et, nesciunt facilis neque animi possimus placeat illo amet in non repudiandae praesentium qui, voluptate ullam distinctio quibusdam. Quod, earum fuga rerum aliquam quo unde minus odit? Blanditiis suscipit repudiandae itaque tenetur. Optio tempore sint aliquam, provident est itaque.",
      image:
        "https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Publicación+3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      title: "Publicación 4",
      username: "Usuario 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus beatae adipisci obcaecati quam ullam temporibus natus vero aliquid. Incidunt commodi quod iste in id veritatis, enim maiores temporibus dolor nemo. Saepe ipsum quo dolorum odio, autem in adipisci ratione animi ut voluptatibus quod incidunt quos voluptates ea blanditiis tempora omnis. Beatae eius asperiores ex distinctio illum autem officia culpa expedita nesciunt deserunt voluptas, in, quod illo eos nobis maiores? Officiis, obcaecati eveniet recusandae optio vero ipsam? Ut nam quo quis? Ipsum blanditiis distinctio impedit eius mollitia maiores eum autem at. Animi deleniti fugiat aliquam quisquam, maiores tenetur asperiores earum architecto praesentium exercitationem tempore harum rem! Commodi a, quaerat odio tempora et, nesciunt facilis neque animi possimus placeat illo amet in non repudiandae praesentium qui, voluptate ullam distinctio quibusdam. Quod, earum fuga rerum aliquam quo unde minus odit? Blanditiis suscipit repudiandae itaque tenetur. Optio tempore sint aliquam, provident est itaque.",
      image:
        "https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Publicación+3",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      title: "Publicación 5",
      username: "Usuario 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus beatae adipisci obcaecati quam ullam temporibus natus vero aliquid. Incidunt commodi quod iste in id veritatis, enim maiores temporibus dolor nemo. Saepe ipsum quo dolorum odio, autem in adipisci ratione animi ut voluptatibus quod incidunt quos voluptates ea blanditiis tempora omnis. Beatae eius asperiores ex distinctio illum autem officia culpa expedita nesciunt deserunt voluptas, in, quod illo eos nobis maiores? Officiis, obcaecati eveniet recusandae optio vero ipsam? Ut nam quo quis? Ipsum blanditiis distinctio impedit eius mollitia maiores eum autem at. Animi deleniti fugiat aliquam quisquam, maiores tenetur asperiores earum architecto praesentium exercitationem tempore harum rem! Commodi a, quaerat odio tempora et, nesciunt facilis neque animi possimus placeat illo amet in non repudiandae praesentium qui, voluptate ullam distinctio quibusdam. Quod, earum fuga rerum aliquam quo unde minus odit? Blanditiis suscipit repudiandae itaque tenetur. Optio tempore sint aliquam, provident est itaque.",
      image:
        "https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Publicación+3",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  /* Funciones para cambiar de publicación */
  const nextPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  /* Funciones para cambiar de publicación */
  const prevPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  /* Regresamos el carrusel de publicaciones */
  return (
    <div className="relative z-0 w-full h-auto max-w-5xl mx-auto overflow-hidden py-10">
      {/* Contenedor del carrusel */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Ajusta el desplazamiento
        }}
      >
        {posts.map((item) => (
          <CardPost
            key={item.id}
            id={item.id}
            username={item.username}
            avatar={item.avatar}
            title={item.title}
            content={item.content}
            imagen={item.image}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      {currentIndex !== 0 && (
        <button onClick={prevPost}>
          <FaArrowCircleLeft
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-400 dark:bg-zinc-700 text-white rounded-full p-2"
            style={{ height: "40px", width: "40px" }}
          />
        </button>
      )}
      <button onClick={nextPost}>
        <FaArrowCircleRight
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-400 dark:bg-zinc-700 text-white rounded-full p-2"
          style={{ height: "40px", width: "40px" }}
        />
      </button>
    </div>
  );
};

export default PostCarousel;
