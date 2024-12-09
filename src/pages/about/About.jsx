import styles from './About.module.css';  // Asegúrate de tener este archivo CSS

const About = () => {
  return (
    <section className={styles.aboutWrapper}>
      <h1 className={styles.title}>Acerca de este proyecto</h1>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Bienvenido a la aplicación de selección de personajes favoritos</h2>
        <p>
          Este proyecto permite a los usuarios seleccionar y guardar temporalmente personajes como favoritos.
          Además, podrás iniciar sesión y crear una lista personalizada con tus personajes más queridos.
        </p>
        
        <h3 className={styles.sectionTitle}>¿Cómo funciona?</h3>
        <ul className={styles.featureList}>
          <li>
            <strong>Iniciar sesión:</strong> Para poder guardar tus personajes favoritos, primero debes iniciar sesión en la plataforma.
          </li>
          <li>
            <strong>Seleccionar personajes:</strong> Puedes navegar por una lista de personajes y seleccionar aquellos que te gusten para agregarlos a tu lista de favoritos.
          </li>
          <li>
            <strong>Personajes especiales:</strong> Además de los personajes regulares, también tendrás acceso a personajes especiales que puedes agregar a tu lista.
          </li>
        </ul>

        <h3 className={styles.sectionTitle}>¿Por qué elegir esta aplicación?</h3>
        <p>
          Esta aplicación está diseñada para ofrecerte una experiencia sencilla y agradable. Puedes crear tu lista de favoritos y tener acceso a los personajes especiales que no encontrarás en otras plataformas.
        </p>

        <h3 className={styles.sectionTitle}>¿Cómo agregar tus personajes favoritos?</h3>
        <p>
          Al explorar los personajes, encontrarás un botón de "Agregar a Favoritos". Solo tienes que hacer clic en él para añadir al personaje que más te guste a tu lista.
        </p>

        <p>
          ¡Gracias por usar nuestra plataforma! Esperamos que disfrutes seleccionando tus personajes favoritos y explorando los especiales.
        </p>
      </div>
    </section>
  );
};

export default About;

