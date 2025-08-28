import { useState } from "react";
import dummyUser from "../data/dummyUser"
import styles from "../styles/Login.module.css"
import emailIcon from "../assets/email.svg"
import passwordIcon from "../assets/password.svg"

export default function LoginForm({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.email === "tff" && form.password === "tff") {
      setUser(dummyUser)
    } else {
      setError("Incorrect email or password")
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset className={styles.form}>
        <div className={styles.inputContainer}>
          <label className="srOnly" htmlFor="email">Email</label>
          <input
            className={styles.field}
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            aria-describedby="email-help"
          />
          <img className={styles.icon} src={emailIcon} alt="email icon" />
        </div>

        <div className={styles.inputContainer}>
          <label className="srOnly" htmlFor="password">Password</label>
          <input
            className={styles.field}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            required
            minLength={8}
            value={form.password}
            onChange={handleChange}
          />
          <img className={styles.icon} src={passwordIcon} alt="password icon" />
        </div>

        {error && (
          <div role="alert" className={styles.error}>
            {error}
          </div>
        )}

        <button className={styles.button} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
}