import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { theme } from './theme';

const DashboardPage = () => {
  const { user, logout, isAdmin, isPatient } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: theme.colors.background,
      padding: theme.spacing
    },
    header: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius,
      padding: theme.spacing * 1.5,
      marginBottom: theme.spacing * 2,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing
    },
    headerLeft: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing / 4
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: theme.colors.text,
      margin: 0
    },
    subtitle: {
      fontSize: '14px',
      color: theme.colors.muted,
      margin: 0
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing,
      flexWrap: 'wrap'
    },
    userBadge: {
      padding: `${theme.spacing / 2}px ${theme.spacing}px`,
      borderRadius: theme.borderRadius,
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    adminBadge: {
      backgroundColor: theme.colors.accent,
      color: 'white'
    },
    patientBadge: {
      backgroundColor: theme.colors.primary,
      color: 'white'
    },
    logoutButton: {
      padding: `${theme.spacing / 2}px ${theme.spacing}px`,
      backgroundColor: theme.colors.danger,
      color: 'white',
      border: 'none',
      borderRadius: theme.borderRadius,
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: theme.fonts.main,
      transition: 'background-color 0.2s ease'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: theme.spacing * 2,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius,
      padding: theme.spacing * 1.5,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    cardHeader: {
      fontSize: '18px',
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: theme.spacing,
      paddingBottom: theme.spacing / 2,
      borderBottom: `1px solid ${theme.colors.muted}20`
    },
    quickActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing / 2
    },
    actionButton: {
      padding: theme.spacing,
      backgroundColor: theme.colors.background,
      border: `1px solid ${theme.colors.muted}40`,
      borderRadius: theme.borderRadius,
      fontSize: '14px',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: theme.fonts.main,
      transition: 'all 0.2s ease',
      color: theme.colors.text
    },
    infoList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    infoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${theme.spacing / 2}px 0`,
      borderBottom: `1px solid ${theme.colors.muted}20`,
      fontSize: '14px'
    },
    infoLabel: {
      color: theme.colors.muted,
      fontWeight: '500'
    },
    infoValue: {
      color: theme.colors.text,
      fontWeight: '400'
    },
    homeLink: {
      position: 'fixed',
      top: theme.spacing,
      left: theme.spacing,
      padding: `${theme.spacing / 2}px ${theme.spacing}px`,
      backgroundColor: theme.colors.surface,
      color: theme.colors.accent,
      textDecoration: 'none',
      borderRadius: theme.borderRadius,
      fontSize: '14px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'all 0.2s ease'
    }
  };

  const adminQuickActions = [
    'Manage Users',
    'View Analytics',
    'System Settings',
    'Backup Data',
    'Generate Reports',
    'Audit Logs'
  ];

  const patientQuickActions = [
    'View Appointments',
    'Medical Records',
    'Prescription History',
    'Contact Doctor',
    'Health Tracker',
    'Insurance Info'
  ];

  const quickActions = isAdmin ? adminQuickActions : patientQuickActions;

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.homeLink}>
        ← Home
      </Link>

      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>
            {isAdmin ? 'Admin Dashboard' : 'Patient Dashboard'}
          </h1>
          <p style={styles.subtitle}>
            Welcome back, {user?.name}!
          </p>
        </div>
        
        <div style={styles.userInfo}>
          <div style={{
            ...styles.userBadge,
            ...(isAdmin ? styles.adminBadge : styles.patientBadge)
          }}>
            {user?.role}
          </div>
          <button
            onClick={handleLogout}
            style={styles.logoutButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#d63a21'}
            onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.danger}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.cardHeader}>Quick Actions</h2>
          <div style={styles.quickActions}>
            {quickActions.map((action, index) => (
              <button
                key={index}
                style={styles.actionButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = theme.colors.accent + '10';
                  e.target.style.borderColor = theme.colors.accent;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = theme.colors.background;
                  e.target.style.borderColor = theme.colors.muted + '40';
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardHeader}>Account Information</h2>
          <ul style={styles.infoList}>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Name:</span>
              <span style={styles.infoValue}>{user?.name}</span>
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Email:</span>
              <span style={styles.infoValue}>{user?.email}</span>
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Role:</span>
              <span style={styles.infoValue}>{user?.role}</span>
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Login Time:</span>
              <span style={styles.infoValue}>
                {user?.loginTime ? formatDate(user.loginTime) : 'N/A'}
              </span>
            </li>
          </ul>
        </div>

        {isAdmin && (
          <div style={styles.card}>
            <h2 style={styles.cardHeader}>System Overview</h2>
            <ul style={styles.infoList}>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Total Patients:</span>
                <span style={styles.infoValue}>247</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Active Sessions:</span>
                <span style={styles.infoValue}>12</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>System Status:</span>
                <span style={styles.infoValue}>Healthy</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Last Backup:</span>
                <span style={styles.infoValue}>2 hours ago</span>
              </li>
            </ul>
          </div>
        )}

        {isPatient && (
          <div style={styles.card}>
            <h2 style={styles.cardHeader}>Health Summary</h2>
            <ul style={styles.infoList}>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Next Appointment:</span>
                <span style={styles.infoValue}>Dec 15, 2024</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Recent Test:</span>
                <span style={styles.infoValue}>Blood Work - Normal</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Prescriptions:</span>
                <span style={styles.infoValue}>2 Active</span>
              </li>
              <li style={styles.infoItem}>
                <span style={styles.infoLabel}>Insurance:</span>
                <span style={styles.infoValue}>Active Coverage</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;