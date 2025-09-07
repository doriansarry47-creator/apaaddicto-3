import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { theme } from './theme';
import PatientProfile from './PatientProfile';

function DashboardPage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    fontFamily: theme.fonts.main
  };

  const headerStyle = {
    backgroundColor: theme.colors.surface,
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const tabStyle = {
    padding: '10px 20px',
    margin: '0 5px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: theme.fonts.main,
    fontSize: '14px',
    fontWeight: '500'
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: theme.colors.accent,
    color: 'white'
  };

  const inactiveTabStyle = {
    ...tabStyle,
    backgroundColor: theme.colors.background,
    color: theme.colors.text
  };

  const contentStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: theme.colors.accent,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: theme.fonts.main,
    fontSize: '14px'
  };

  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.colors.danger
  };

  const renderOverview = () => (
    <div>
      <div style={cardStyle}>
        <h3 style={{ color: theme.colors.text, marginBottom: '15px' }}>Aperçu du compte</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div>
            <strong>Nom complet:</strong> {user.firstName || ''} {user.lastName || ''}
          </div>
          <div>
            <strong>Email:</strong> {user.email || ''}
          </div>
          <div>
            <strong>Téléphone:</strong> {user.phone || ''}
          </div>
          <div>
            <strong>Date de naissance:</strong> {user.dateOfBirth || ''}
          </div>
        </div>
      </div>

      <div style={cardStyle}>
        <h3 style={{ color: theme.colors.text, marginBottom: '15px' }}>Statistiques de suivi</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: theme.colors.background, borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: theme.colors.accent }}>
              {user.appointments?.length || 0}
            </div>
            <div style={{ color: theme.colors.muted }}>Rendez-vous</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: theme.colors.background, borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: theme.colors.accent }}>
              {user.medications?.length || 0}
            </div>
            <div style={{ color: theme.colors.muted }}>Médicaments</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: theme.colors.background, borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: theme.colors.accent }}>
              {user.medicalHistory?.length || 0}
            </div>
            <div style={{ color: theme.colors.muted }}>Historique médical</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div style={cardStyle}>
      <h3 style={{ color: theme.colors.text, marginBottom: '15px' }}>Rendez-vous</h3>
      {user.appointments && user.appointments.length > 0 ? (
        <div>
          {user.appointments.map((appointment, index) => (
            <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee', marginBottom: '10px' }}>
              <strong>{appointment.date}</strong> - {appointment.doctor}
              <br />
              <span style={{ color: theme.colors.muted }}>{appointment.reason}</span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: theme.colors.muted }}>Aucun rendez-vous programmé</p>
      )}
      <button style={buttonStyle} onClick={() => alert('Fonctionnalité à implémenter')}>
        Prendre un rendez-vous
      </button>
    </div>
  );

  const renderMedications = () => (
    <div style={cardStyle}>
      <h3 style={{ color: theme.colors.text, marginBottom: '15px' }}>Médicaments</h3>
      {user.medications && user.medications.length > 0 ? (
        <div>
          {user.medications.map((medication, index) => (
            <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee', marginBottom: '10px' }}>
              <strong>{medication.name}</strong>
              <br />
              <span style={{ color: theme.colors.muted }}>
                {medication.dosage} - {medication.frequency}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: theme.colors.muted }}>Aucun médicament enregistré</p>
      )}
      <button style={buttonStyle} onClick={() => alert('Fonctionnalité à implémenter')}>
        Ajouter un médicament
      </button>
    </div>
  );

  const renderMedicalHistory = () => (
    <div style={cardStyle}>
      <h3 style={{ color: theme.colors.text, marginBottom: '15px' }}>Historique médical</h3>
      {user.medicalHistory && user.medicalHistory.length > 0 ? (
        <div>
          {user.medicalHistory.map((record, index) => (
            <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee', marginBottom: '10px' }}>
              <strong>{record.date}</strong>
              <br />
              <span style={{ color: theme.colors.muted }}>{record.description}</span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: theme.colors.muted }}>Aucun historique médical enregistré</p>
      )}
    </div>
  );

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h2 style={{ margin: 0, color: theme.colors.text }}>
            Tableau de bord - {user.firstName || ''} {user.lastName || ''}
          </h2>
          <p style={{ margin: '5px 0 0 0', color: theme.colors.muted }}>
            Dernière connexion: {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('fr-FR') : 'N/A'}
          </p>
        </div>
        <button style={logoutButtonStyle} onClick={logout}>
          Déconnexion
        </button>
      </div>

      <div style={contentStyle}>
        <div style={{ marginBottom: '20px' }}>
          <button
            style={activeTab === 'overview' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('overview')}
          >
            Aperçu
          </button>
          <button
            style={activeTab === 'appointments' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('appointments')}
          >
            Rendez-vous
          </button>
          <button
            style={activeTab === 'medications' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('medications')}
          >
            Médicaments
          </button>
          <button
            style={activeTab === 'history' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('history')}
          >
            Historique
          </button>
          <button
            style={activeTab === 'profile' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('profile')}
          >
            Profil
          </button>
        </div>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'appointments' && renderAppointments()}
        {activeTab === 'medications' && renderMedications()}
        {activeTab === 'history' && renderMedicalHistory()}
        {activeTab === 'profile' && <PatientProfile />}
      </div>
    </div>
  );
}

export default DashboardPage;
