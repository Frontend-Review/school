import React, { useState, useEffect } from 'react';

function Home() {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const fetchBgImage = async () => {
      const response = await fetch('https://api.unsplash.com/photos/random?query=school&orientation=landscape&client_id=IHuww1sfvg_IGzl6MVpKt8Mq6GvtiWT1N27q39J_63c');
      const data = await response.json();
      setBgImage(data.urls.full);
    };

    fetchBgImage();
  }, []);

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={bgStyle}>
      <h1>Welcome to our Elementary School Application Portal</h1>
      {/* Add other content here */}
    </div>
  );
}

export default Home;
