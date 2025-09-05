import React from 'react';
import { theme } from './theme';

function NotFound() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: theme.colors.background,
      fontFamily: theme.fonts.main,
      textAlign: 'center',
      padding: theme.spacing + 'px'
    },
    title: {
      fontSize: '4rem',
      color: theme.colors.danger,
      margin: 0,
      marginBottom: theme.spacing / 2 + 'px'
    },
    subtitle: {
      fontSize: '1.5rem',
      color: theme.colors.text,
      marginBottom: theme.spacing + 'px'
    },
    text: {
      color: theme.colors.muted,
      fontSize: '1rem'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.text}>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;