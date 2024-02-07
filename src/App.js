import { Route, Routes, BrowserRouter } from 'react-router-dom';
import useOnLocationChange from './hooks/useOnLocationChange';

import styles from './styles/App.module.css';
import Navbar from './components/layouts/Navbar/Navbar';
import Tapbar from './components/layouts/Tapbar/Tapbar';
import Footer from './components/layouts/Footer';

import WeeklyCalendar from './components/layouts/WeeklyCalendar';

import HomePage from './pages/HomePage';
import GuestApply from './pages/Matching/MatchApply/GuestApply';
import TeamApply from './pages/Matching/MatchApply/TeamApply';
import GuestHost from './pages/Matching/MatchHost/GuestHost';
import TeamHost from './pages/Matching/MatchHost/TeamHost';
import MatchingHome from './pages/Matching/MatchingHome';
import MatchHistoryForGuest from './pages/Matching/MatchHistoryForGuest';
import MatchHistoryForHost from './pages/Matching/MatchHistoryForHost';
import MatchHistoryForHostMember from './pages/Matching/MatchHistoryForHostMember';

import Login from './pages/Login/Home/Login';
import LoginLanding from './pages/Login/Landing/LoginLanding';

import TeamDetailPage from './pages/Team/Detail/TeamDetailPage';
import TeamUpdatePage from './pages/Team/Update/TeamUpdatePage';
import TeamSelectionPage from './pages/Team/Home/TeamSelectionPage';
import TeamCreatePage from './pages/Team/Create/TeamCreatePage';

import LocationList from './pages/Location/Home/LocationList';
import LocationWrite from './pages/Location/Write/LocationWrite';
import LocationDetail from './pages/Location/Detail/LocationDetail';
import LocationUpdate from './pages/Location/Update/LocationUpdate';

import CommunityList from './pages/Community/Home/CommunityList';
import CommunityWrite from './pages/Community/Write/CommunityWrite';
import CommunityDetail from './pages/Community/Detail/CommunityDetail';

import MyPage from './pages/MyPage/Home/MyPage';
import MyUpdate from './pages/MyPage/Update/MyUpdatePage';
import SavedPost from './pages/MyPage/Community/Save/SavedPost';
import WritedPost from './pages/MyPage/Community/Write/WritedPost';
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
  useOnLocationChange(() => window.scrollTo(0, 0));
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* Team Page */}
        <Route path='/team' element={<TeamSelectionPage />} />
        <Route path='/team/create' element={<TeamCreatePage />} />
        <Route path='/team/:id/update' element={<TeamUpdatePage />} />
        <Route path='/team/:id' element={<TeamDetailPage />} />

        {/* My Page */}
        <Route path='/my' element={<MyPage />} />
        <Route path='/my/community/save' element={<SavedPost />} />
        <Route path='/my/community/write' element={<WritedPost />} />
        <Route path='my/update' element={<MyUpdate />} />

        <Route path='/login' element={<Login />} />
        <Route path='/login/landing' element={<LoginLanding />} />
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
        <Route path='/matching/history/' element={<MatchHistoryForGuest />} />
        <Route
          path='/matching/history/host'
          element={<MatchHistoryForHost />}
        />
        <Route
          path='/matching/history/host/member'
          element={<MatchHistoryForHostMember />}
        />
        <Route path='/location' element={<LocationList />} />
        <Route path='/location/write' element={<LocationWrite />} />
        <Route path='/location/:id/detail' element={<LocationDetail />} />
        <Route path='/location/:id/update' element={<LocationUpdate />} />

        <Route path='/community' element={<CommunityList />} />
        <Route path='/community/write' element={<CommunityWrite />} />
        <Route path='/community/:id/detail' element={<CommunityDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
