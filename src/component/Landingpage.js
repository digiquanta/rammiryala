import * as React from "react";
import backgroundImage from '../assets/images/background.jpg';

function LandingPage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap');
        `}
      </style>
      <img
        loading="lazy"
        src={backgroundImage}
        style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        alt="Background"
      />
      <header
        className="header"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '80px',
          backgroundColor: '#000000',
          border: '1px solid #000000',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
          zIndex: 2, // Ensure it is above the background
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: '#ff2121',
            fontSize: '34px',
            fontWeight: '400',
            letterSpacing: '0.25px',
            fontFamily: '"Rammetto One", sans-serif',
            margin: '0',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          RAM MIRYALA
        </h1>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#000000', // Black background
            border: '2px solid #ff2121', // Border color
            color: '#ff2121', // Font color
            whiteSpace: 'nowrap',
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        >
          Join community
        </button>
      </header>
      <nav
        className="nav-item"
        style={{
          position: 'fixed',
          top: '80px', // Adjusted from top of viewport
          left: '50%',
          transform: 'translateX(-50%)', // Center horizontally
          width: '1040px',
          height: '88px',
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          gap: '0px',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
          opacity: '1',
          zIndex: 2, // Ensure it is above the background
        }}
      >
        <div style={{ color: 'white' }}>Music</div>
        <div style={{ color: 'white' }}>About</div>
        <div style={{ color: 'white' }}>Events</div>
        <div style={{ color: 'white' }}>Shop</div>
        <div style={{ color: 'white' }}>Gallery</div>
      </nav>
      <div
        className="upcoming-event"
        style={{
          position: 'absolute',
          top: '680px', // Adjust this value to ensure it's below the nav and header
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          color: 'white',
          textAlign: 'center',
          zIndex: 1, // Ensure it is above the background
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            marginBottom: '20px',
          }}
        >
          Upcoming event
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '3rem',
          }}
        >
          <div>
            23 <span>days</span>
          </div>
          <div>:</div>
          <div>
            3 <span>hours</span>
          </div>
          <div>:</div>
          <div>
            15 <span>mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
