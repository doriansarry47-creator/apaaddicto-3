import React, { useState } from 'react';
import { useAuth } from './App';
import { theme } from './theme';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Compléter le profil', completed: false },
    { id: 2, title: 'Explorer les fonctionnalités', completed: true },
    { id: 3, title: 'Configurer les préférences', completed: false }
  ]);

  const handleLogout = () => {
    logout();
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: theme.colors.background,
      fontFamily: theme.fonts.main
    },
    header: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      padding: theme.spacing * 1.5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    headerTitle: {
      color: theme.colors.surface,
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0
    },
    headerUser: {
      color: theme.colors.surface,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing
    },
    logoutButton: {
      background: 'rgba(255,255,255,0.2)',
      border: 'none',
      color: theme.colors.surface,
      padding: `${theme.spacing/2}px ${theme.spacing}px`,
      borderRadius: theme.borderRadius,
      cursor: 'pointer',
      fontFamily: theme.fonts.main,
      transition: 'background 0.3s ease'
    },
    nav: {
      background: theme.colors.surface,
      padding: theme.spacing,
      borderBottom: `1px solid ${theme.colors.background}`,
      display: 'flex',
      gap: theme.spacing
    },
    navButton: {
      background: 'none',
      border: `2px solid ${theme.colors.background}`,
      padding: `${theme.spacing/2}px ${theme.spacing}px`,
      borderRadius: theme.borderRadius,
      cursor: 'pointer',
      fontFamily: theme.fonts.main,
      transition: 'all 0.3s ease'
    },
    navButtonActive: {
      background: theme.colors.accent,
      color: theme.colors.surface,
      borderColor: theme.colors.accent
    },
    main: {
      padding: theme.spacing * 2,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      background: theme.colors.surface,
      borderRadius: theme.borderRadius,
      padding: theme.spacing * 1.5,
      marginBottom: theme.spacing * 1.5,
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: theme.spacing
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: theme.spacing * 1.5
    },
    stat: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`,
      color: theme.colors.surface,
      padding: theme.spacing * 1.5,
      borderRadius: theme.borderRadius,
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: theme.spacing / 2
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.9
    },
    taskList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing,
      borderBottom: `1px solid ${theme.colors.background}`,
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    taskCheckbox: {
      marginRight: theme.spacing,
      cursor: 'pointer'
    },
    taskText: {
      flex: 1
    },
    taskCompleted: {
      textDecoration: 'line-through',
      color: theme.colors.muted
    }
  };

  const renderOverview = () => (
    <>
      <div style={styles.grid}>
        <div style={styles.stat}>
          <div style={styles.statNumber}>3</div>
          <div style={styles.statLabel}>Tâches Totales</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>1</div>
          <div style={styles.statLabel}>Tâches Complétées</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>67%</div>
          <div style={styles.statLabel}>Progression</div>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Mes Tâches</h3>
        <ul style={styles.taskList}>
          {tasks.map(task => (
            <li 
              key={task.id} 
              style={styles.taskItem}
              onClick={() => toggleTask(task.id)}
            >
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={styles.taskCheckbox}
              />
              <span style={{
                ...styles.taskText,
                ...(task.completed ? styles.taskCompleted : {})
              }}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const renderProfile = () => (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>Profil Utilisateur</h3>
      <p><strong>Nom:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Statut:</strong> Actif</p>
      <p><strong>Membre depuis:</strong> {new Date().toLocaleDateString()}</p>
    </div>
  );

  const renderSettings = () => (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>Paramètres</h3>
      <p>Configuration des préférences utilisateur</p>
      <div style={{ marginTop: theme.spacing }}>
        <label style={{ display: 'block', marginBottom: theme.spacing / 2 }}>
          <input type="checkbox" style={{ marginRight: theme.spacing / 2 }} />
          Notifications par email
        </label>
        <label style={{ display: 'block', marginBottom: theme.spacing / 2 }}>
          <input type="checkbox" defaultChecked style={{ marginRight: theme.spacing / 2 }} />
          Mode sombre
        </label>
        <label style={{ display: 'block', marginBottom: theme.spacing / 2 }}>
          <input type="checkbox" defaultChecked style={{ marginRight: theme.spacing / 2 }} />
          Synchronisation automatique
        </label>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfile();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Apaaddicto 3</h1>
        <div style={styles.headerUser}>
          <span>Bonjour, {user?.name}!</span>
          <button 
            onClick={handleLogout}
            style={styles.logoutButton}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
          >
            Déconnexion
          </button>
        </div>
      </header>

      <nav style={styles.nav}>
        {[
          { key: 'overview', label: 'Vue d\'ensemble' },
          { key: 'profile', label: 'Profil' },
          { key: 'settings', label: 'Paramètres' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...styles.navButton,
              ...(activeTab === tab.key ? styles.navButtonActive : {})
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main style={styles.main}>
        {renderContent()}
      </main>
    </div>
  );
};

export default DashboardPage;