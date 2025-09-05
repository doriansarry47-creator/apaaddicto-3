import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>Please log in to access your account.</p>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;