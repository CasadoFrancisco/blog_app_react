import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../StateContext";
import styles from "./NavbarRight.module.css";

const NavbarRight = () => {
  const { state, setstate } = useContext(StateContext);
  return (
    <div className={styles.containerCount}>
      {state ? (
        <>
          <Link className={styles.url} to="/settings">
            <img
              className={styles.topImage}
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
          <button className={styles.icons} onClick={() => setstate(!state)}>
            {" "}
            <i class="fa-solid fa-right-from-bracket"></i>{" "}
          </button>
          <div className={styles.iconLogin}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </>
      ) : (
        <>
          <ul className={styles.containerList}>
            <li className={styles.links}>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className={styles.links}>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
          <div className={styles.iconLogout}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarRight;
