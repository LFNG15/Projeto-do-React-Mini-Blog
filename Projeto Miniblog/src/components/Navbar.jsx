import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuthValue();
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={styles.active}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={styles.active}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={styles.active}>
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <NavLink to="/posts/create" className={styles.active}>
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={styles.active}>
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about" className={styles.active}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
