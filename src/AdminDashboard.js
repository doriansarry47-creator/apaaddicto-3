import React, { useState, useEffect } from 'react';
import { theme } from './theme';

const AdminDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [contentSections, setContentSections] = useState([]);

  // Mock data for patients
  useEffect(() => {
    const mockPatients = [
      {
        id: 1,
        name: 'Patient Martinez',
        email: 'patient1@example.com',
        registrationDate: new Date('2024-01-15'),
        lastActivity: new Date('2024-09-05'),
        status: 'active'
      },
      {
        id: 2,
        name: 'Patient Dubois',
        email: 'patient2@example.com',
        registrationDate: new Date('2024-02-20'),
        lastActivity: new Date('2024-08-28'),
        status: 'inactive'
      },
      {
        id: 3,
        name: 'Patient Bernard',
        email: 'patient3@example.com',
        registrationDate: new Date('2024-03-10'),
        lastActivity: new Date('2024-09-06'),
        status: 'active'
      },
      {
        id: 4,
        name: 'Patient Lefebvre',
        email: 'patient4@example.com',
        registrationDate: new Date('2024-01-05'),
        lastActivity: new Date('2024-07-15'),
        status: 'inactive'
      }
    ];

    const mockContent = [
      {
        id: 1,
        title: 'Page d\'accueil',
        content: 'Bienvenue sur Apaaddicto 3 - Plateforme de gestion de santé',
        lastModified: new Date('2024-08-15')
      },
      {
        id: 2,
        title: 'À propos',
        content: 'Notre mission est d\'aider les patients dans leur parcours de soins.',
        lastModified: new Date('2024-08-20')
      }
    ];

    setPatients(mockPatients);
    setContentSections(mockContent);
  }, []);

  const calculateInactivityDays = (lastActivity) => {
    const today = new Date();
    const diffTime = today - lastActivity;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const deletePatient = (patientId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce patient ?')) {
      setPatients(patients.filter(patient => patient.id !== patientId));
    }
  };

  const updateContent = (contentId, newContent) => {
    setContentSections(contentSections.map(section => 
      section.id === contentId 
        ? { ...section, content: newContent, lastModified: new Date() }
        : section
    ));
  };

  const activePatients = patients.filter(p => p.status === 'active').length;
  const inactivePatients = patients.filter(p => p.status === 'inactive').length;

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
      padding: '20px',
      borderRadius: theme.borderRadius,
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    title: {
      color: theme.colors.text,
      margin: 0,
      fontSize: '2rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    },
    statCard: {
      backgroundColor: theme.colors.surface,
      padding: '20px',
      borderRadius: theme.borderRadius,
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: theme.colors.primary,
      margin: 0
    },
    statLabel: {
      color: theme.colors.muted,
      margin: '5px 0 0 0'
    },
    section: {
      backgroundColor: theme.colors.surface,
      padding: '20px',
      borderRadius: theme.borderRadius,
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
      color: theme.colors.text,
      marginBottom: '15px',
      fontSize: '1.5rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    th: {
      backgroundColor: theme.colors.background,
      padding: '12px',
      textAlign: 'left',
      borderBottom: '2px solid #eee',
      color: theme.colors.text
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #eee',
      color: theme.colors.text
    },
    button: {
      backgroundColor: theme.colors.danger,
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    textarea: {
      width: '100%',
      minHeight: '100px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: theme.fonts.main,
      resize: 'vertical'
    },
    saveButton: {
      backgroundColor: theme.colors.primary,
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '10px'
    },
    contentItem: {
      marginBottom: '20px',
      padding: '15px',
      border: '1px solid #eee',
      borderRadius: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Tableau de bord Administrateur</h1>
        <p style={{ color: theme.colors.muted, margin: '10px 0 0 0' }}>
          Gestion des patients et du contenu du site
        </p>
      </div>

      {/* Statistics Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>{patients.length}</h2>
          <p style={styles.statLabel}>Patients inscrits</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>{activePatients}</h2>
          <p style={styles.statLabel}>Patients actifs</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>{inactivePatients}</h2>
          <p style={styles.statLabel}>Patients inactifs</p>
        </div>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>
            {patients.length > 0 ? Math.round(patients.reduce((acc, p) => acc + calculateInactivityDays(p.lastActivity), 0) / patients.length) : 0}
          </h2>
          <p style={styles.statLabel}>Jours d'inactivité moyenne</p>
        </div>
      </div>

      {/* Patient Management */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Gestion des Patients</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nom</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Date d'inscription</th>
              <th style={styles.th}>Dernière activité</th>
              <th style={styles.th}>Jours d'inactivité</th>
              <th style={styles.th}>Statut</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td style={styles.td}>{patient.name}</td>
                <td style={styles.td}>{patient.email}</td>
                <td style={styles.td}>{patient.registrationDate.toLocaleDateString('fr-FR')}</td>
                <td style={styles.td}>{patient.lastActivity.toLocaleDateString('fr-FR')}</td>
                <td style={styles.td}>{calculateInactivityDays(patient.lastActivity)}</td>
                <td style={styles.td}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: patient.status === 'active' ? theme.colors.primary : theme.colors.muted,
                    color: 'white'
                  }}>
                    {patient.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td style={styles.td}>
                  <button 
                    style={styles.button}
                    onClick={() => deletePatient(patient.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Content Management */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Gestion du Contenu</h2>
        {contentSections.map(section => (
          <div key={section.id} style={styles.contentItem}>
            <h3 style={{ margin: '0 0 10px 0', color: theme.colors.text }}>{section.title}</h3>
            <p style={{ color: theme.colors.muted, fontSize: '14px', margin: '0 0 10px 0' }}>
              Dernière modification: {section.lastModified.toLocaleDateString('fr-FR')}
            </p>
            <textarea
              style={styles.textarea}
              value={section.content}
              onChange={(e) => updateContent(section.id, e.target.value)}
              placeholder="Contenu de la section..."
            />
            <button 
              style={styles.saveButton}
              onClick={() => alert('Contenu sauvegardé!')}
            >
              Sauvegarder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;