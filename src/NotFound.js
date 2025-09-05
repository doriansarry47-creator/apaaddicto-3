import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const NotFound = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.fonts.main,
      padding: theme.spacing,
      textAlign: 'center'
    },
    title: {
      fontSize: '72px',
      fontWeight: 'bold',
      color: theme.colors.surface,
      margin: 0,
      marginBottom: theme.spacing
    },
    subtitle: {
      fontSize: '24px',
      color: theme.colors.surface,
      marginBottom: theme.spacing * 2,
      opacity: 0.9
    },
    description: {
      fontSize: '16px',
      color: theme.colors.surface,
      marginBottom: theme.spacing * 3,
      maxWidth: '500px',
      opacity: 0.8
    },
    button: {
      background: theme.colors.surface,
      color: theme.colors.accent,
      border: 'none',
      padding: `${theme.spacing}px ${theme.spacing * 2}px`,
      borderRadius: theme.borderRadius,
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page non trouvée</h2>
      <p style={styles.description}>
        Désolé, la page que vous recherchez n'existe pas. 
        Elle a peut-être été déplacée ou supprimée.
      </p>
      <Link 
        to="/login" 
        style={styles.button}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Retour à la connexion
      </Link>
    </div>
  );
};

export default NotFound;