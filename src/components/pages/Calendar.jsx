import styles from "../../styles/Calendar.module.css"

export default function Calendar() {
  function createMonthArr(start, length) {
  const classMap = {
    1: "lowerBody",
    2: "speed",
    4: "upperBody",
    5: "recovery",
  };

  return Array.from({ length: start + length }, (_, i) => {
    if (i < start) {
      return { id: i, value: "", class: "null" };
    }

    return {
      id: i,
      value: i - start + 1,
      class: classMap[i % 7] || "empty",
    };
  });
}

function renderMonth(monthArr) {
  const month = monthArr.map(day => (
    <div key={day.id} className={`${styles.day} ${styles[day.class]}`}>
      {day.value}
    </div>
  ))
  return(
    <div className={styles.daysContainer}>
      {month}
    </div>
  )
}
  
  return(
    <>
      <div className={styles.calendarContainer}>
        <div className={styles.calendar}>
          <div className={styles.monthContainer}>
            <h4>August</h4>
            {renderMonth(createMonthArr(4, 31))}
          </div>
          <div className={styles.monthContainer}>
            <h4>September</h4>
            {renderMonth(createMonthArr(0, 30))}
          </div>
          <div className={styles.monthContainer}>
            <h4>October</h4>
            {renderMonth(createMonthArr(0, 31))}
          </div>
        </div>
      </div>
    </>
  )
}