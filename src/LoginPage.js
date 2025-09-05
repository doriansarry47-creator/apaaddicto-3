import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: theme.colors.background,
      fontFamily: theme.fonts.main,
      padding: theme.spacing + 'px'
    },
    form: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing * 2 + 'px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      textAlign: 'center',
      color: theme.colors.text,
      marginBottom: theme.spacing + 'px',
      fontSize: '2rem'
    },
    inputGroup: {
      marginBottom: theme.spacing + 'px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: theme.colors.text,
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: theme.colors.primary,
      color: theme.colors.text,
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Login to Apaaddicto 3</h1>
        
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
        
        <div style={{ textAlign: 'center', marginTop: theme.spacing + 'px' }}>
          <Link to="/home" style={{ color: theme.colors.accent, textDecoration: 'none' }}>
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;