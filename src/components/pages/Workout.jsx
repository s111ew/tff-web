import styles from '../../styles/Workout.module.css'

export default function Workout({ user }) {
  const today = new Date();
  const todayDay = today.getDay(); // Sunday = 0, so shift by +1 to match your data
  const todayDate = today.getDate();

  // Find today's workout from the schedule
  const todayWorkout = user.schedule.find(workout => workout.day === todayDay);

  // Format today's date string
  const getTodayDate = () => {
    const options = { weekday: "short", day: "numeric", month: "short", year: "numeric" };
    return today.toLocaleDateString("en-GB", options).replace(",", "");
  };

  // Render exercises (limit to 7 max)
  const renderedWorkoutList = 
    todayWorkout?.exercises !== "none" && Array.isArray(todayWorkout?.exercises)
      ? todayWorkout.exercises.slice(0, 5).map((exercise, i) => (
          <p key={i}>{exercise.name}</p>
        ))
      : null;

  // Build the week preview
  const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const week = Array.from({ length: 7 }, (_, i) => {
    const workoutDay = ((todayDay - 1 + i) % 7) + 1;
    return {
      date: todayDate + i <= daysInCurrentMonth ? todayDate + i : (todayDate + i) - daysInCurrentMonth,
      colour: user.schedule.find(workout => workout.day === workoutDay)?.colourCode || ''
    };
  });

  const renderedWeek = week.map((d, idx) => (
    <div 
      key={idx} 
      className={`${d.colour} ${idx === 0 ? styles.current : ''}`}
    >
      {d.date}
    </div>
  ));

  return (
    <div className={styles.workout}>
      <div className={`${todayWorkout?.colourCode || ''} ${styles.today}`}>
        <h4>{getTodayDate()}</h4>
        <p>{todayWorkout?.title}</p>
      </div>

      {renderedWorkoutList && (
        <div className={styles.todayWorkout}>
          {renderedWorkoutList}
          <div className={styles.gradient}></div>
          <p className={styles.start}>Start Session</p>
        </div>
      )}

      <div className={styles.week}>
        {renderedWeek}
      </div>
    </div>
  );
}
