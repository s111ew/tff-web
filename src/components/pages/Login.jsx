import { useState } from "react"
import styles from "../../styles/Login.module.css"
import LoginForm from "../LoginForm";

function Login({ setUser }) {
  const [screen, setScreen] = useState("login");

  return(
    <div className={styles.container} onClick={() => setUser(false)}>
      <div className={`${styles.formContainer} container`}>
          {screen === "login" ?
          (
            <>
              <h1>Sign in</h1>
              <p className={styles.introText}>Plan smarter, train harder, and track your progress on and off the pitch.</p>
              <LoginForm setUser={setUser} />
              <p className={styles.subtitle}>New to Total Football Fitness? <span onClick={() => {setScreen("signUp")}}>Sign up</span></p>
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <p className={styles.introText}>Your football fitness journey starts here. Build workouts, stay motivated, and improve your game.</p>
              <h2>Coming Soon</h2>
              <p className={styles.subtitle}>Already have an account? <span onClick={() => {setScreen("login")}}>Log in</span></p>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Login