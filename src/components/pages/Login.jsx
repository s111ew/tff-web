import { useState } from "react"
import styles from "../../styles/Login.module.css"
import LoginForm from "../LoginForm";

function Login({ setUser }) {
  const [screen, setScreen] = useState("login");

  return(
    <div className={styles.container} onClick={() => setUser(false)}>
      <div className={styles.formContainer}>
          {screen === "login" ?
          (
            <>
              <h1>Login</h1>
              <LoginForm setUser={setUser} />
              <p>New to Total Football Fitness? <span onClick={() => {setScreen("signUp")}}>Sign up</span></p>
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <SignUpForm setUser={setUser} />
              <p>Already have an account? <span onClick={() => {setScreen("login")}}>Log in</span></p>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Login