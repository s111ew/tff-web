import Workout from "./pages/Workout"
import Calendar from "./pages/Calendar"
import Profile from "./pages/Profile"

export default function Content({ currentPage, user }) {
  return (
    <>
      {currentPage === 'workout' ? <Workout user={user} /> : ''}
      {currentPage === 'calendar' ? <Calendar user={user}/> : ''}
      {currentPage === 'profile' ? <Profile user={user} /> : ''}
    </>
  )
}