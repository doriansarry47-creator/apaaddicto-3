import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function HomePage() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: theme.colors.background,
      fontFamily: theme.fonts.main,
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center'
    },
    title: {
      fontSize: '3rem',
      margin: '0 0 15px 0',
      fontWeight: '600'
    },
    subtitle: {
      fontSize: '1.3rem',
      margin: 0,
      opacity: 0.9
    },
    content: {
      flex: 1,
      padding: '50px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '40px'
    },
    featureCard: {
      backgroundColor: theme.colors.surface,
      padding: '30px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      textAlign: 'center'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '15px'
    },
    featureTitle: {
      color: theme.colors.text,
      fontSize: '1.5rem',
      margin: '0 0 15px 0'
    },
    featureDesc: {
      color: theme.colors.muted,
      lineHeight: '1.6'
    },
    ctaSection: {
      textAlign: 'center',
      backgroundColor: theme.colors.surface,
      padding: '40px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
    },
    ctaTitle: {
      color: theme.colors.text,
      fontSize: '2rem',
      margin: '0 0 20px 0'
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    button: {
      padding: '15px 30px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    primaryButton: {
      backgroundColor: theme.colors.primary,
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Apaaddicto 3</h1>
        <p style={styles.subtitle}>Plateforme de gestion de santé moderne</p>
      </div>

      <div style={styles.content}>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>👥</div>
            <h3 style={styles.featureTitle}>Gestion des Patients</h3>
            <p style={styles.featureDesc}>
              Suivi personnalisé des patients avec historique médical complet et outils de communication intégrés.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <h3 style={styles.featureTitle}>Tableau de Bord Admin</h3>
            <p style={styles.featureDesc}>
              Interface d'administration complète pour gérer les contenus du site et surveiller l'activité des patients.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Sécurité Renforcée</h3>
            <p style={styles.featureDesc}>
              Protection des données médicales avec authentification sécurisée et respect de la confidentialité.
            </p>
          </div>
        </div>

        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Commencez dès maintenant</h2>
          <div style={styles.buttonGroup}>
            <Link 
              to="/login" 
              style={{...styles.button, ...styles.primaryButton}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#6fd89c'}
              onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.primary}
            >
              Se connecter
            </Link>
            <Link 
              to="/dashboard" 
              style={{...styles.button, ...styles.secondaryButton}}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.colors.primary;
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = theme.colors.primary;
              }}
            >
              Espace Patient
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;