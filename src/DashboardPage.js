import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function DashboardPage() {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: theme.fonts.main,
      backgroundColor: theme.colors.background,
      minHeight: '100vh'
    },
    header: {
      backgroundColor: theme.colors.surface,
      padding: '30px',
      borderRadius: theme.borderRadius,
      marginBottom: '30px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },
    title: {
      color: theme.colors.text,
      margin: '0 0 10px 0',
      fontSize: '2.5rem'
    },
    subtitle: {
      color: theme.colors.muted,
      margin: 0,
      fontSize: '1.1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    },
    card: {
      backgroundColor: theme.colors.surface,
      padding: '25px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },
    cardIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px'
    },
    cardTitle: {
      color: theme.colors.text,
      fontSize: '1.3rem',
      margin: '0 0 10px 0'
    },
    cardDesc: {
      color: theme.colors.muted,
      fontSize: '0.9rem',
      lineHeight: '1.5'
    },
    navigationCard: {
      gridColumn: '1 / -1',
      backgroundColor: theme.colors.surface,
      padding: '30px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },
    navTitle: {
      color: theme.colors.text,
      fontSize: '1.5rem',
      margin: '0 0 20px 0'
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    button: {
      padding: '12px 25px',
      borderRadius: '8px',
      fontSize: '14px',
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
      backgroundColor: theme.colors.accent,
      color: 'white'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Tableau de Bord Patient</h1>
        <p style={styles.subtitle}>Bienvenue dans votre espace personnel</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.cardIcon}>📋</div>
          <h3 style={styles.cardTitle}>Mon Dossier</h3>
          <p style={styles.cardDesc}>
            Consultez votre historique médical, vos prescriptions et vos rendez-vous à venir.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardIcon}>📅</div>
          <h3 style={styles.cardTitle}>Rendez-vous</h3>
          <p style={styles.cardDesc}>
            Planifiez et gérez vos rendez-vous avec vos professionnels de santé.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardIcon}>💬</div>
          <h3 style={styles.cardTitle}>Messages</h3>
          <p style={styles.cardDesc}>
            Communiquez directement avec votre équipe médicale en toute sécurité.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardIcon}>📊</div>
          <h3 style={styles.cardTitle}>Suivi</h3>
          <p style={styles.cardDesc}>
            Suivez l'évolution de votre traitement et vos indicateurs de santé.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardIcon}>🎯</div>
          <h3 style={styles.cardTitle}>Objectifs</h3>
          <p style={styles.cardDesc}>
            Définissez et suivez vos objectifs de santé personnalisés.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardIcon}>📚</div>
          <h3 style={styles.cardTitle}>Ressources</h3>
          <p style={styles.cardDesc}>
            Accédez à des ressources éducatives adaptées à votre situation.
          </p>
        </div>

        <div style={styles.navigationCard}>
          <h3 style={styles.navTitle}>Navigation rapide</h3>
          <div style={styles.buttonGroup}>
            <Link 
              to="/" 
              style={{...styles.button, ...styles.secondaryButton}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2196f3'}
              onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.accent}
            >
              Accueil
            </Link>
            <Link 
              to="/login" 
              style={{...styles.button, ...styles.primaryButton}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#6fd89c'}
              onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.primary}
            >
              Se déconnecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
