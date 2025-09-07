import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from './theme';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication
    if (userType === 'admin') {
      if (email === 'admin@apaaddicto.com' && password === 'admin123') {
        // Successful admin login
        localStorage.setItem('userType', 'admin');
        navigate('/admin');
      } else {
        setError('Identifiants administrateur incorrects');
      }
    } else {
      if (email && password) {
        // Successful patient login
        localStorage.setItem('userType', 'patient');
        navigate('/dashboard');
      } else {
        setError('Veuillez remplir tous les champs');
      }
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: theme.colors.background,
      fontFamily: theme.fonts.main,
      padding: '20px'
    },
    loginCard: {
      backgroundColor: theme.colors.surface,
      padding: '40px',
      borderRadius: theme.borderRadius,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '2rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      color: theme.colors.text,
      fontSize: '14px',
      fontWeight: '500'
    },
    input: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: theme.fonts.main,
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    select: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: theme.fonts.main,
      outline: 'none',
      backgroundColor: theme.colors.surface,
      cursor: 'pointer'
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: 'white',
      border: 'none',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '10px'
    },
    error: {
      color: theme.colors.danger,
      backgroundColor: '#ffeaea',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '14px',
      textAlign: 'center'
    },
    info: {
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '14px',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <h1 style={styles.title}>Connexion</h1>
        
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Type d'utilisateur</label>
            <select
              style={styles.select}
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="admin">Administrateur</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={userType === 'admin' ? 'admin@apaaddicto.com' : 'votre@email.com'}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Mot de passe</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={userType === 'admin' ? 'admin123' : 'Votre mot de passe'}
              required
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <button 
            type="submit" 
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = '#6fd89c'}
            onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.primary}
          >
            Se connecter
          </button>
        </form>

        <div style={styles.info}>
          <strong>Compte de démonstration :</strong><br />
          Administrateur : admin@apaaddicto.com / admin123<br />
          Patient : n'importe quel email/mot de passe
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
