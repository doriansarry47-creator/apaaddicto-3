import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function LoginPage() {
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
    maxWidth: '400px'
  };

  const linkStyle = {
    color: theme.colors.accent,
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: theme.spacing
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ 
          color: theme.colors.text,
          fontFamily: theme.fonts.main 
        }}>
          Connexion
        </h1>
        <p style={{ 
          color: theme.colors.text,
          fontFamily: theme.fonts.main 
        }}>
          Veuillez vous connecter pour continuer.
        </p>
        
        <div style={{ marginTop: theme.spacing * 2 }}>
          <p style={{ 
            color: theme.colors.muted,
            fontFamily: theme.fonts.main 
          }}>
            Pas encore de compte ?
          </p>
          <Link to="/register" style={linkStyle}>
            S'inscrire ici
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
