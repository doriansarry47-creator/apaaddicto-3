import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Apaaddicto 3</h1>
      <p>This is the homepage of the application. Feel free to explore!</p>
      <p>
        <Link to="/login">Go to Login Page</Link>
      </p>
    </div>
  );
}

export default HomePage;