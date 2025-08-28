import styles from "../../styles/Profile.module.css"

export default function User({ user }) {

  function formatDate(dateString) {
    const date = new Date(dateString.replace(" ", "T")); 

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  // Convert kilograms to pounds
  function kgToLbs(kg) {
    return kg * 2.20462;
  }
  
  // Convert metres to feet
  function metresToFeet(metres) {
    return metres * 3.28084;
  }

  return(
    <>
      <p className={styles.title}>User</p>
      <ul className={styles.basicInfo}>
        <li><span className={styles.field}>First Name</span><span>{user.firstName}</span></li>
        <li><span className={styles.field}>Second Name</span><span>{user.secondName}</span></li>
        <li><span className={styles.field}>Email</span><span>{user.email}</span></li>
        <li><span className={styles.field}>Member Since</span><span>{formatDate(user.joined)}</span></li>
        <li><span className={styles.field}>Date of Birth</span><span>{formatDate(user.dateOfBirth)}</span></li>
        <li><span className={styles.field}>Date of Birth</span><span>{formatDate(user.dateOfBirth)}</span></li>
        <li><span className={styles.field}>Height</span><span>{`${user.settings.lengthIsMetric ? user.profile.height : metresToFeet(user.profile.height)}${user.settings.lengthIsMetric ? "m" : "ft"}`}</span></li>
        <li><span className={styles.field}>Weight</span><span>{`${user.settings.weightIsMetric ? user.profile.weight : kgToLbs(user.profile.weight)}${user.settings.weightIsMetric ? "kg" : "lbs"}`}</span></li>
      </ul>
      <ul className={styles.achieved}>
        <li><span className={styles.field}>Workouts Completed</span><span>{user.profile.workoutsCompleted}</span></li>
        <li><span className={styles.field}>Weight Lifted</span><span>{`${user.settings.weightIsMetric ? user.profile.weightLifted : kgToLbs(user.profile.weightLifted)}${user.settings.weightIsMetric ? "kg" : "lbs"}`}</span></li>
        <li><span className={styles.field}>Distance Covered</span><span>{`${user.settings.lengthIsMetric ? user.profile.distanceCovered : metresToFeet(user.profile.distanceCovered)}${user.settings.lengthIsMetric ? "m" : "ft"}`}</span></li>
      </ul>
    </>
  )
}