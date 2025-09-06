import React, { useState } from 'react';
import { theme } from './theme';

const profileStyles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: `${theme.spacing * 3}px ${theme.spacing * 2}px`,
  },
  header: {
    textAlign: 'center',
    marginBottom: `${theme.spacing * 3}px`,
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: `${theme.spacing}px`,
  },
  subtitle: {
    fontSize: '16px',
    color: theme.colors.muted,
  },
  profileCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    marginBottom: `${theme.spacing * 2}px`,
  },
  profileInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: `${theme.spacing * 2}px`,
    marginBottom: `${theme.spacing * 2}px`,
  },
  infoGroup: {
    marginBottom: `${theme.spacing}px`,
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: `${theme.spacing / 2}px`,
    display: 'block',
  },
  input: {
    width: '100%',
    padding: `${theme.spacing}px`,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius,
    fontSize: '16px',
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface,
    border: 'none',
    padding: `${theme.spacing}px ${theme.spacing * 2}px`,
    borderRadius: theme.borderRadius,
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginRight: `${theme.spacing}px`,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: `${theme.spacing * 2}px`,
    marginTop: `${theme.spacing * 2}px`,
  },
  statCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: `${theme.spacing / 2}px`,
  },
  statLabel: {
    fontSize: '14px',
    color: theme.colors.muted,
  },
};

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'January 2024',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
    alert('Profile updated successfully!');
  };

  const stats = [
    { number: '47', label: 'Days Active' },
    { number: '12', label: 'Apps Tracked' },
    { number: '3.2h', label: 'Avg Daily Usage' },
    { number: '85%', label: 'Goal Achievement' },
  ];

  return (
    <div style={profileStyles.container}>
      <div style={profileStyles.header}>
        <h1 style={profileStyles.title}>User Profile</h1>
        <p style={profileStyles.subtitle}>Manage your account information and view your statistics</p>
      </div>

      <div style={profileStyles.profileCard}>
        <div style={profileStyles.profileInfo}>
          <div style={profileStyles.infoGroup}>
            <label style={profileStyles.label}>Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              disabled={!isEditing}
              style={profileStyles.input}
            />
          </div>
          <div style={profileStyles.infoGroup}>
            <label style={profileStyles.label}>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={!isEditing}
              style={profileStyles.input}
            />
          </div>
          <div style={profileStyles.infoGroup}>
            <label style={profileStyles.label}>Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              disabled={!isEditing}
              style={profileStyles.input}
            />
          </div>
          <div style={profileStyles.infoGroup}>
            <label style={profileStyles.label}>Location</label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              disabled={!isEditing}
              style={profileStyles.input}
            />
          </div>
        </div>
        
        <div>
          {isEditing ? (
            <>
              <button 
                onClick={handleSave}
                style={profileStyles.button}
              >
                Save Changes
              </button>
              <button 
                onClick={() => setIsEditing(false)}
                style={{
                  ...profileStyles.button,
                  backgroundColor: theme.colors.muted,
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              style={profileStyles.button}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div style={profileStyles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={profileStyles.statCard}>
            <div style={profileStyles.statNumber}>{stat.number}</div>
            <div style={profileStyles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;