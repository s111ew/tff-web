import styles from "../../styles/Profile.module.css"

export default function Settings({ user }) {
  return(
    <>
      <p className={styles.title}>Settings</p>
      <ul className={styles.settings}>
        <li>
          <span className={styles.field}>Weight Unit</span>
          <input 
            type="checkbox" 
            placeholder={user.firstName}/>
        </li>
      </ul>
    </>
  )
}