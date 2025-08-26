import styles from '../../styles/Workout.module.css'

export default function Workout({workout, date, day, workoutMap}) {
  if (!workout || !date) {
    return (
      <p>Loading Workout...</p>
    )
  }

  const renderedWorkoutList = workout.exercises.slice(0, 7).map((exercise, i) => (
    <p key={i}>{exercise.name}</p>
  ))

  const todayDate = parseInt(date.split(" ")[1]);
  let week = [];

  const now = new Date();

  const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  for (let i = 0; i < 7; i++) {
    let d = {
      date: todayDate + i <= daysInCurrentMonth ? todayDate + i : (todayDate + i) - daysInCurrentMonth,
      workout: workoutMap[day + i] || "empty"
    }
    week.push(d);
  }

  const renderedWeek = week.map((d, idx) => (
    <div className={`${styles[d.workout]} ${idx === 0 ? styles.current : ''}`}>{d.date}</div>
  ))

  return(
    <>
      <div className={styles.workout}>
        <div className={`${workout.colourCode} ${styles.today}`}>
          <h4>{date}</h4>
          <p>{workout.title}</p>
        </div>
        <div className={styles.todayWorkout}>
          {renderedWorkoutList}
          <div className={styles.gradient}></div>
          <p className={styles.start}>Start Session</p>
        </div>
        <div className={styles.week}>
          {renderedWeek}
        </div>
      </div>
    </>
  )
}