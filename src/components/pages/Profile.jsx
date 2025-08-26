import styles from "../../styles/Profile.module.css"
import arrow from "../../assets/arrow_right_grey.svg"

export default function Profile() {
  return(
    <>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <ul className={styles.optionList}>
            <li className={styles.user}>
              <div className={styles.userPic}></div>
              <div className={styles.userNameContainer}>
                <p className={styles.userName}>J Smith</p>
                <p className={styles.userSince}>Joined: <span>August 2025</span></p>
              </div>
            </li>
            <div className={styles.divider}></div>
            <li className={styles.optionItem}>About <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
            <div className={styles.divider}></div>
            <li className={styles.optionItem}>Benchmarking <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
            <div className={styles.divider}></div>
            <li className={styles.optionItem}>Settings <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
            <div className={styles.divider}></div>
            <li className={styles.optionItem}>Contact <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}