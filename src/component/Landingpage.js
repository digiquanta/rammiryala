import React, { useEffect } from 'react';
import NavItem from './NavItem';
import backgroundImage from '../assets/images/background.jpg';

function LandingPage() {
  useEffect(() => {
    // Disable scrolling when this component is mounted
    document.body.style.overflow = 'hidden';

    // Enable scrolling again when this component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <NavItem />
      <img
        loading="lazy"
        src={backgroundImage}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100vh', // Ensure it covers the viewport height
          position: 'fixed', // Fix the image in place
          top: 0,
          left: 0,
          zIndex: -1, // Place it behind other content
        }}
        alt="Background"
      />
      <div
        className="upcoming-event"
        style={{
          position: 'absolute',
          top: '600px', // Adjust this value as needed
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
