import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles/App.module.css';
import Navbar from './components/layouts/Navbar';
import Tapbar from './components/layouts/Tapbar';
import Footer from './components/layouts/Footer';

import WeeklyCalendar from './components/layouts/WeeklyCalendar';

import HomePage from './pages/HomePage';
import GuestApply from './pages/Matching/MatchApply/GuestApply';
import TeamApply from './pages/Matching/MatchApply/TeamApply';
import GuestHost from './pages/Matching/MatchHost/GuestHost';
import TeamHost from './pages/Matching/MatchHost/TeamHost';
import MatchingHome from './pages/Matching/MatchingHome';
import Login from './pages/login/Login';
import LoginLanding from './pages/login/LoginLanding';
import TeamDetailPage from './pages/team/TeamDetailPage';
import TeamSelectionPage from './pages/team/TeamSelectionPage';
import TeamCreatePage from './pages/team/TeamCreatePage';
import LocationList from './pages/location/LocationList';
import LocationWrite from './pages/location/LocationWrite';
import GuestApplyDetail from './pages/Matching/MatchApply/GuestApplyDetail';

function App() {
  return (
    <div className={styles.screen}>
      <BrowserRouter>
        <Navbar />
        <ContentBox />
        <Tapbar />
      </BrowserRouter>
    </div>
  );
}

// contents in here
function ContentBox() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* Team Page */}
        <Route path='/team' element={<TeamSelectionPage />} />
        <Route path='/team/detail' element={<TeamDetailPage />} />
        <Route path='/team/create' element={<TeamCreatePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/welcome-user' element={<LoginLanding />} />
        <Route path='/matching' element={<MatchingHome />} />
        <Route path='/matching/guestapply' element={<GuestApply />} />
        <Route
          path='/matching/guestapply/detail'
          element={<GuestApplyDetail />}
        />
        <Route path='/matching/teamapply' element={<TeamApply />} />
        <Route path='/matching/guesthost' element={<GuestHost />} />
        <Route path='/matching/teamhost' element={<TeamHost />} />
        <Route path='/matching/weeklycalendar' element={<WeeklyCalendar />} />
        <Route path='/location' element={<LocationList />} />
        <Route path='/location/write' element={<LocationWrite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
