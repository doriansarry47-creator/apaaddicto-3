import React from 'react';
import { theme } from './theme';

function DashboardPage() {
  const styles = {
    container: {
      padding: theme.spacing + 'px',
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      fontFamily: theme.fonts.main
    },
    header: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing + 'px',
      borderRadius: theme.borderRadius,
      marginBottom: theme.spacing + 'px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    title: {
      color: theme.colors.text,
      margin: 0,
      fontSize: '2rem'
    },
    content: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing + 'px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
      </div>
      <div style={styles.content}>
        <p>Welcome to your dashboard! You have successfully logged in.</p>
        <p>This is where your application content would be displayed.</p>
      </div>
    </div>
  );
}

export default DashboardPage;