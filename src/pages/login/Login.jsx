import styles from "./Login.module.css";
import { useContext } from "react";
import { StateContext } from "../../StateContext";

const Login = () => {
    const { state, setstate } = useContext(StateContext);
    return (
        <div className={styles.container}>
            <span className={styles.loginTitle}>LOGIN</span>
            <form className={styles.loginForm}>
                <label>Email</label>
                <input
                    type="text"
                    className={styles.loginInput}
                    placeholder="enter your email..."
                />
                <label>Password</label>
                <input
                    type="password"
                    className={styles.loginInput}
                    placeholder="enter your password..."
                />
                <button
                    className={styles.loginButton}
                    onClick={() => setstate(!state)}
                >
                    Login
                </button>
            </form>
            <button className={styles.loginRegisterButton}>Register</button>
        </div>
    );
};

export default Login;
