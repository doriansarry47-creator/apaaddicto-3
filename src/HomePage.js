import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { theme } from './theme';

function HomePage() {
  const { isAuthenticated, user } = useAuth();

  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing
    },
    content: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius,
      padding: theme.spacing * 3,
      textAlign: 'center',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      width: '100%'
    },
    title: {
      fontSize: '36px',
      fontWeight: '700',
      color: theme.colors.text,
      margin: 0,
      marginBottom: theme.spacing
    },
    subtitle: {
      fontSize: '18px',
      color: theme.colors.muted,
      marginBottom: theme.spacing * 2,
      lineHeight: 1.6
    },
    buttonContainer: {
      display: 'flex',
      gap: theme.spacing,
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    button: {
      display: 'inline-block',
      padding: `${theme.spacing}px ${theme.spacing * 1.5}px`,
      borderRadius: theme.borderRadius,
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      fontFamily: theme.fonts.main,
      border: 'none',
      cursor: 'pointer'
    },
    primaryButton: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: theme.colors.accent,
      border: `2px solid ${theme.colors.accent}`
    },
    welcomeMessage: {
      backgroundColor: `${theme.colors.primary}20`,
      padding: theme.spacing,
      borderRadius: theme.borderRadius,
      marginBottom: theme.spacing * 2,
      fontSize: '16px',
      color: theme.colors.text
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Apaaddicto 3</h1>
        <p style={styles.subtitle}>
          Modern healthcare platform with secure admin and patient portals
        </p>
        
        {isAuthenticated && (
          <div style={styles.welcomeMessage}>
            Welcome back, {user?.name}! ({user?.role})
          </div>
        )}

        <div style={styles.buttonContainer}>
          {isAuthenticated ? (
            <Link 
              to="/dashboard" 
              style={{...styles.button, ...styles.primaryButton}}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link 
                to="/login" 
                style={{...styles.button, ...styles.primaryButton}}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Login
              </Link>
              <Link 
                to="/dashboard" 
                style={{...styles.button, ...styles.secondaryButton}}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = theme.colors.accent;
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = theme.colors.accent;
                }}
              >
                Try Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;