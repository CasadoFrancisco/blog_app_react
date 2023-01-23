import styles from "./Register.module.css";

const Register = () => {
    return (
        <div className={styles.container}>
            <span className={styles.registerTitle}>REGISTER</span>
            <form className={styles.registerForm}>
                <label>Username</label>
                <input
                    type="text"
                    className={styles.registerInput}
                    placeholder="enter your username..."
                />
                <label>Email</label>
                <input
                    type="text"
                    className={styles.registerInput}
                    placeholder="enter your email..."
                />
                <label>Password</label>
                <input
                    type="password"
                    className={styles.registerInput}
                    placeholder="enter your password..."
                />
                <button className={styles.registerButton}>register</button>
            </form>
            <button className={styles.registerLoginButton}>Login</button>
        </div>
    );
};

export default Register;
