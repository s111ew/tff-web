import styles from "../../styles/Profile.module.css"
import arrow from "../../assets/arrow_right_grey.svg"

export default function Profile({ user }) {

  function formatJoinedDate(dateString) {
    const date = new Date(dateString.replace(" ", "T"));
    const options = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return(
    <>
      <div className={styles.profileContainer}>
        <div className={`${styles.profile} container`}>
          <ul className={styles.optionList}>
            <li className={styles.user}>
              <div className={styles.userPic}>{user.firstName[0]}</div>
              <div className={styles.userNameContainer}>
                <p className={styles.userName}>{user.firstName[0]}. {user.secondName}</p>
                <p className={styles.userSince}>Member Since: {formatJoinedDate(user.joined)}</p>
              </div>
            </li>
            <div className={styles.divider}></div>
            <li className={styles.optionItem}>Profile <img className={styles.arrowIcon} src={arrow} alt="Arrow icon" /></li>
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