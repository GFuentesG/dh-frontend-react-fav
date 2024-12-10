import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Navigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();  // Cambiar el estado de autenticación
    navigate('/login');  // Redirigir a la página de login
  };

  return (
    <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/favorites'>Favoritos</Link></li>
            <li><Link to='/contact'>Contacto</Link></li>
            <li><Link to='/about'>Acerca de</Link></li>
            {/* <li><Link to='/login'>Login</Link></li> */}
            {/* {!isLoggedIn ? (
              <li><Link to='/login'>Login</Link></li>
            ) : (
              <li><button onClick={handleLogout}>Logout</button></li>
            )} */}
            {!isLoggedIn ? (
              <li><Link to='/login'>Iniciar Sesion</Link></li>  // Si no está logueado, mostrar Login
              ) : (
              <li><Link to="/login" onClick={handleLogout}>Cerrar Sesion</Link></li>  // Si está logueado, mostrar Logout
            )}
            {isLoggedIn && (
              <li><Link to="/dashboard">Panel Especial</Link></li>
            )}
            {/* <li><Link to='/dashboard'>Dashboard</Link></li> */}
        </ul>
    </nav>
  )
}

export default Navbar