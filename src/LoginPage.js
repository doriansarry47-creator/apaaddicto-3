import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please log in to continue.</p>
      <p>
        <Link to="/">Back to Homepage</Link>
      </p>
    </div>
  );
}

export default LoginPage;
