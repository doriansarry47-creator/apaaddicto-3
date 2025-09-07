import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { theme } from './theme';

function HomePage() {
  const { isAuthenticated, user } = useAuth();

  const containerStyle = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
  };

  const contentStyle = {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '600px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    margin: '10px',
    backgroundColor: theme.colors.accent,
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: theme.fonts.main
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{ color: theme.colors.text, marginBottom: '20px' }}>
          Bienvenue sur Apaaddicto 3
        </h1>
        <p style={{ color: theme.colors.muted, fontSize: '18px', marginBottom: '30px' }}>
          Système de suivi et d'identification des patients
        </p>

        {isAuthenticated ? (
          <div>
            <p style={{ color: theme.colors.text, marginBottom: '20px' }}>
              Bonjour {user.firstName ? `${user.firstName} ${user.lastName}` : 'cher patient'} !
            </p>
            <Link to="/dashboard" style={buttonStyle}>
              Accéder au tableau de bord
            </Link>
          </div>
        ) : (
          <div>
            <p style={{ color: theme.colors.muted, marginBottom: '30px' }}>
              Connectez-vous pour accéder à votre espace personnel de suivi médical
            </p>
            <Link to="/login" style={buttonStyle}>
              Se connecter
            </Link>
            <Link to="/register" style={{ ...buttonStyle, backgroundColor: theme.colors.secondary }}>
              S'inscrire
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;