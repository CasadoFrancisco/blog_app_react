import styles from "./Login.module.css";

const Login = () => {
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
        <button className={styles.loginButton}>Login</button>
      </form>
      <button className={styles.loginRegisterButton}>Register</button>
    </div>
  );
};

export default Login;
