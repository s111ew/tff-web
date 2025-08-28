import styles from "../../styles/Profile.module.css"
import { useState } from "react";
import Home from "../profile/Home";
import User from "../profile/User";
import Benchmarking from "../profile/Benchmarking";
import Settings from "../profile/Settings";
import Contact from "../profile/Contact";
import arrow from "../../assets/arrow_right_grey.svg"

export default function Profile({ user }) {
  const [page, setPage] = useState("home")

  return(
    <>
      <div className={`${styles.profile} container`}>
        {page === "home" ? (
          <Home user={user} setPage={setPage} />
        ) : (
          <>
            <div className={styles.backButton} onClick={() => setPage("home")} >
              <img src={arrow} alt="back arrow" style={{transform: "rotate(-180deg)"}} />
              <p>Back</p>
            </div>
            {page === "user" && <User user={user} />}
            {page === "benchmarking" && <Benchmarking user={user} />}
            {page === "contact" && <Contact user={user} />}
            {page === "settings" && <Settings user={user} />}
          </>
        )
        }
      </div>
    </>
  )
}