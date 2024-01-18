import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styles from './styles/App.module.css';

import Navbar from './components/layouts/Navbar';
import Tapbar from './components/layouts/Tapbar';
import Footer from './components/layouts/Footer';

import Home from './pages/Home';
import GuestApply from './pages/Matching.jsx/MatchApply/GuestApply';
import TeamApply from './pages/Matching.jsx/MatchApply/TeamApply';
import GuestHost from './pages/Matching.jsx/MatchHost/GuestHost';
import TeamHost from './pages/Matching.jsx/MatchHost/TeamHost';
import MatchingHome from './pages/Matching.jsx/MatchingHome';
import WeeklyCalendar from './components/layouts/WeeklyCalendar';

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
        <Route path='/' element={<Home />} />
        <Route path='/matching' element={<MatchingHome />} />
        <Route path='/matching/guestapply' element={<GuestApply />} />
        <Route path='/matching/teamapply' element={<TeamApply />} />
        <Route path='/matching/guesthost' element={<GuestHost />} />
        <Route path='/matching/teamhost' element={<TeamHost />} />
        <Route path='/matching/weeklycalendar' element={<WeeklyCalendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
