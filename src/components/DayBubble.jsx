import styles from "../styles/DayBubble.module.css"
import { useState } from "react"

export default function DayBubble({value, className, isToday, workoutName}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  function onClick() {
    !tooltipOpen ? setTooltipOpen(true) : setTooltipOpen(false);
  }

  return(
    <div
      onClick={onClick}
      className={`${styles.day} ${styles[className]} ${isToday ? styles.today : ""}`}>
        {value}
        <div className={`${styles.tooltip} ${tooltipOpen ? styles.visible : ''}`}>
          {workoutName}
        </div>
    </div>
  )
}