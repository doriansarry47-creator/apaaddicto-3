import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function HomePage() {
  const containerStyle = {
    backgroundColor: theme.colors.background,
    minHeight: '100vh',
    padding: theme.spacing * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const cardStyle = {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing * 2,
    borderRadius: theme.borderRadius,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px'
  };

  const linkStyle = {
    color: theme.colors.accent,
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '0 16px',
    padding: '8px 16px',
    border: `1px solid ${theme.colors.accent}`,
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '8px'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ 
          color: theme.colors.text,
          fontFamily: theme.fonts.main 
        }}>
          Bienvenue sur Apaaddicto 3
        </h1>
        <p style={{ 
          color: theme.colors.text,
          fontFamily: theme.fonts.main,
          marginBottom: theme.spacing * 2 
        }}>
          Ceci est la page d'accueil de l'application. N'hésitez pas à explorer !
        </p>
        
        <div style={{ marginTop: theme.spacing * 2 }}>
          <Link to="/login" style={linkStyle}>
            Se connecter
          </Link>
          <Link to="/register" style={linkStyle}>
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;