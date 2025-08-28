import styles from "../styles/DayBubble.module.css"
import { useState, useEffect, useRef } from "react"

export default function DayBubble({ value, className, isToday, name, size }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const bubbleRef = useRef(null);

  // Toggle tooltip on bubble click
  function onClick(e) {
    e.stopPropagation(); // prevent closing immediately when clicking the bubble
    setTooltipOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      // If click happens outside of this component, close tooltip
      if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
        setTooltipOpen(false);
      }
    }

    if (tooltipOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [tooltipOpen]);

  return (
    <div
      ref={bubbleRef}
      onClick={className !== null ? onClick : null}
      className={`${styles.day} ${isToday ? styles.today : ""} ${size === 'L' ? styles.large : styles.small}`}>
        <p>{value}</p>
        <div className={`${styles.tooltip} ${className} ${tooltipOpen ? styles.visible : ''}`}>
          {name}
        </div>
        <div className={`${className} indicator`}></div>
    </div>
  )
}
