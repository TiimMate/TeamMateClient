import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styles from './styles/App.module.css';

import Navbar from './components/layouts/Navbar';
import Tapbar from './components/layouts/Tapbar';
import Footer from './components/layouts/Footer';

import Home from './pages/Home';

import TeamDetailPage from './pages/team/TeamDetailPage';
import TeamSelectionPage from './pages/team/TeamSelectionPage';
import TeamCreatePage from './pages/team/TeamCreatePage';

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

        {/* Team Page */}
        <Route path='/team' element={<TeamSelectionPage />} />
        <Route path='/team/detail' element={<TeamDetailPage />} />
        <Route path='/team/create' element={<TeamCreatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
