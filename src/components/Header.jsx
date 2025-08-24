import styles from '../styles/Header.module.css'
import logo from '../assets/tff_logo.svg'

export default function Header() {
  return(
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt={'Total Football Fitness Logo'}></img>
        <p className={styles.logoText}>Total Football Fitness</p>
      </div>
    </>
  )
}