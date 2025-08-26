import styles from "../../styles/Calendar.module.css"
import DayBubble from "../DayBubble";

export default function Calendar({ workoutMap, workouts }) {
  const today = new Date();

  function createMonthArr(year, month, start, length) {
    return Array.from({ length: start + length }, (_, i) => {
      if (i < start) {
        return { id: i, value: "", class: "null" };
      }

      const dayNum = i - start + 1;
      const isToday =
        year === today.getFullYear() &&
        month === today.getMonth() &&
        dayNum === today.getDate();

      return {
        id: i,
        value: dayNum,
        class: workoutMap[i % 7] || "empty",
        isToday,
        workoutName: workouts.map(workout => workout.day === i % 7).title || "Rest Day"
      };
    });
  }

  function renderMonth(monthArr) {
    return (
      <div className={styles.daysContainer}>
        {monthArr.map((day) => (
          <DayBubble key={day.id} value={day.value} className={day.class} isToday={day.isToday} workoutName={day.workoutName}/>
        ))}
      </div>
    );
  }

  // Generate 3 months starting from current month
  const months = Array.from({ length: 3 }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const startDay = (date.getDay() + 6) % 7;
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();

    return {
      name: monthName,
      arr: createMonthArr(year, date.getMonth(), startDay, daysInMonth),
    };
  });

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendar}>
        {months.map((m, idx) => (
          <div key={idx} className={styles.monthContainer}>
            <h4>{m.name}</h4>
            {renderMonth(m.arr)}
          </div>
        ))}
      </div>
    </div>
  );
}
