import Workout from "./pages/Workout"
import Calendar from "./pages/Calendar"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Navbar from "./Navbar"
import { useState } from "react";

export default function Content() {
  const [currentPage, setCurrentPage] = useState('workout');
  const [user, setUser] = useState(null);

  return (
    <div className="background">
      {
        !user ? (
            <Login setUser={setUser} />
          ) : (
            <>
              {currentPage === 'workout' && <Workout user={user} />}
              {currentPage === 'calendar' && <Calendar user={user}/>}
              {currentPage === 'profile' && <Profile user={user} />}
              <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </>
        )
      }
    </div>
  )
}