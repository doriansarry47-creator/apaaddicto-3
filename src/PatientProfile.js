import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { theme } from './theme';

function PatientProfile() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || '',
    dateOfBirth: user.dateOfBirth || '',
    gender: user.gender || '',
    address: user.address || ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    setMessage('Profil mis à jour avec succès !');
    setTimeout(() => setMessage(''), 3000);
  };

  const cardStyle = {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: '30px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: theme.fonts.main,
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: theme.fonts.main,
    fontSize: '14px',
    fontWeight: '500'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.colors.accent,
    color: 'white'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.colors.background,
    color: theme.colors.text
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ color: theme.colors.text, margin: 0 }}>Profil Patient</h3>
        {!isEditing && (
          <button style={primaryButtonStyle} onClick={() => setIsEditing(true)}>
            Modifier
          </button>
        )}
      </div>

      {message && (
        <div style={{
          backgroundColor: theme.colors.primary,
          color: 'white',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Date de naissance</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Sexe</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Sélectionner</option>
                <option value="male">Homme</option>
                <option value="female">Femme</option>
                <option value="other">Autre</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Adresse</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <button type="submit" style={primaryButtonStyle}>
              Sauvegarder
            </button>
            <button 
              type="button" 
              style={secondaryButtonStyle}
              onClick={() => {
                setIsEditing(false);
                setFormData({
                  firstName: user.firstName || '',
                  lastName: user.lastName || '',
                  email: user.email || '',
                  phone: user.phone || '',
                  dateOfBirth: user.dateOfBirth || '',
                  gender: user.gender || '',
                  address: user.address || ''
                });
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <strong style={{ color: theme.colors.text }}>Prénom:</strong>
              <p style={{ margin: '5px 0', color: theme.colors.muted }}>{user.firstName}</p>
            </div>
            <div>
              <strong style={{ color: theme.colors.text }}>Nom:</strong>
              <p style={{ margin: '5px 0', color: theme.colors.muted }}>{user.lastName}</p>
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: theme.colors.text }}>Email:</strong>
            <p style={{ margin: '5px 0', color: theme.colors.muted }}>{user.email}</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: theme.colors.text }}>Téléphone:</strong>
            <p style={{ margin: '5px 0', color: theme.colors.muted }}>{user.phone}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <strong style={{ color: theme.colors.text }}>Date de naissance:</strong>
              <p style={{ margin: '5px 0', color: theme.colors.muted }}>
                {new Date(user.dateOfBirth).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <div>
              <strong style={{ color: theme.colors.text }}>Sexe:</strong>
              <p style={{ margin: '5px 0', color: theme.colors.muted }}>
                {user.gender === 'male' ? 'Homme' : user.gender === 'female' ? 'Femme' : 'Autre'}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: theme.colors.text }}>Adresse:</strong>
            <p style={{ margin: '5px 0', color: theme.colors.muted }}>{user.address}</p>
          </div>

          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: theme.colors.background, borderRadius: '8px' }}>
            <strong style={{ color: theme.colors.text }}>Informations du compte:</strong>
            <p style={{ margin: '5px 0', color: theme.colors.muted }}>
              ID Patient: {user.id}
            </p>
            <p style={{ margin: '5px 0', color: theme.colors.muted }}>
              Date d'inscription: {new Date(user.registrationDate || user.lastLogin).toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientProfile;