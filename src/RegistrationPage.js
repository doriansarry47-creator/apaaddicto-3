import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // TODO: Add actual registration logic here
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: theme.spacing * 2,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: `1px solid ${theme.colors.muted}`,
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: theme.fonts.main,
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: theme.fonts.main,
    cursor: 'pointer',
    marginTop: '16px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: theme.colors.text,
    fontFamily: theme.fonts.main
  };

  return (
    <div style={{ 
      backgroundColor: theme.colors.background, 
      minHeight: '100vh', 
      padding: theme.spacing * 2 
    }}>
      <div style={formStyle}>
        <h1 style={{ 
          textAlign: 'center', 
          color: theme.colors.text,
          fontFamily: theme.fonts.main,
          marginBottom: theme.spacing * 2
        }}>
          Inscription
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle} htmlFor="prenom">
              Prénom
            </label>
            <input
              style={inputStyle}
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="nom">
              Nom
            </label>
            <input
              style={inputStyle}
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="email">
              Adresse mail
            </label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="password">
              Mot de passe
            </label>
            <input
              style={inputStyle}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = theme.colors.accent}
            onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.primary}
          >
            S'inscrire
          </button>
        </form>
        
        <div style={{ marginTop: theme.spacing * 2, textAlign: 'center' }}>
          <p style={{ 
            color: theme.colors.muted,
            fontFamily: theme.fonts.main,
            marginBottom: '8px'
          }}>
            Déjà un compte ?
          </p>
          <Link 
            to="/login" 
            style={{
              color: theme.colors.accent,
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Se connecter ici
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;