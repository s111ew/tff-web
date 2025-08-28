import styles from "../../styles/Profile.module.css"
import arrow from "../../assets/arrow_right_grey.svg"

export default function Home({user, setPage}) {
  function formatJoinedDate(dateString) {
    const date = new Date(dateString.replace(" ", "T"));
    const options = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return(
    <>
      <ul className={styles.optionList}>
        <li className={styles.user}>
          <div className={styles.userPic}>{user.firstName[0]}</div>
          <div className={styles.userNameContainer}>
            <p className={styles.userName}>{user.firstName[0]}. {user.secondName}</p>
            <p className={styles.userSince}>Member Since: {formatJoinedDate(user.joined)}</p>
          </div>
        </li>
        <div className={styles.divider}></div>
        <li onClick={() => setPage("user")} className={styles.optionItem}>User <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
        <div className={styles.divider}></div>
        <li onClick={() => setPage("benchmarking")} className={styles.optionItem}>Benchmarking <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
        <div className={styles.divider}></div>
        <li onClick={() => setPage("settings")} className={styles.optionItem}>Settings <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
        <div className={styles.divider}></div>
        <li onClick={() => setPage("contact")} className={styles.optionItem}>Contact <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
      </ul>
    </>
  )
}