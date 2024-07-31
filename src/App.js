import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/Landingpage';
import MusicPage from './component/Music';
import About from './component/about';
import Event from './component/Event';
// import ShopPage from './component/ShopPage';
// import GalleryPage from './component/GalleryPage';
import JoinCommunity from './component/Joincommunity';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClosePopup = () => setIsPopupVisible(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Event />} />
          {/*<Route path="shop" element={<ShopPage />} />
          <Route path="gallery" element={<GalleryPage />} /> */}
        </Routes>
        {isPopupVisible && <JoinCommunity isVisible={isPopupVisible} onClose={handleClosePopup} />}
      </div>
    </Router>
  );
}

export default App;
