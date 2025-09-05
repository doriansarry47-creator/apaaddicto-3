import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const NotFound = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
      padding: theme.spacing,
      textAlign: 'center'
    },
    errorCode: {
      fontSize: '120px',
      fontWeight: '700',
      color: theme.colors.accent,
      margin: 0,
      lineHeight: 1,
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    title: {
      fontSize: '28px',
      fontWeight: '600',
      color: theme.colors.text,
      margin: `${theme.spacing}px 0 ${theme.spacing / 2}px 0`
    },
    message: {
      fontSize: '16px',
      color: theme.colors.muted,
      marginBottom: theme.spacing * 2,
      maxWidth: '400px'
    },
    linkContainer: {
      display: 'flex',
      gap: theme.spacing,
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    link: {
      display: 'inline-block',
      padding: `${theme.spacing}px ${theme.spacing * 1.5}px`,
      borderRadius: theme.borderRadius,
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      fontFamily: theme.fonts.main
    },
    primaryLink: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      color: 'white'
    },
    secondaryLink: {
      backgroundColor: theme.colors.surface,
      color: theme.colors.accent,
      border: `1px solid ${theme.colors.accent}`
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.message}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div style={styles.linkContainer}>
        <Link 
          to="/" 
          style={{...styles.link, ...styles.primaryLink}}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Go Home
        </Link>
        <Link 
          to="/login" 
          style={{...styles.link, ...styles.secondaryLink}}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = theme.colors.accent;
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = theme.colors.surface;
            e.target.style.color = theme.colors.accent;
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;