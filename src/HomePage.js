import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function HomePage() {
  const styles = {
    container: {
      padding: theme.spacing + 'px',
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      fontFamily: theme.fonts.main
    },
    content: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing * 2 + 'px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    title: {
      color: theme.colors.text,
      marginBottom: theme.spacing + 'px'
    },
    description: {
      color: theme.colors.muted,
      marginBottom: theme.spacing * 2 + 'px'
    },
    loginLink: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: theme.colors.primary,
      color: theme.colors.text,
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Apaaddicto 3</h1>
        <p style={styles.description}>This is the homepage of the application. Feel free to explore!</p>
        <Link to="/login" style={styles.loginLink}>Go to Login</Link>
      </div>
    </div>
  );
}

export default HomePage;