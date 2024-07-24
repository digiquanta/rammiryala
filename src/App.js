import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import LandingPage from './component/Landingpage';
import MusicPage from './component/Music';
// import AboutPage from './component/AboutPage';
// import EventsPage from './component/EventsPage';
// import ShopPage from './component/ShopPage';
// import GalleryPage from './component/GalleryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="music" element={<MusicPage />} />
            {/* <Route path="about" element={<AboutPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="gallery" element={<GalleryPage />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
