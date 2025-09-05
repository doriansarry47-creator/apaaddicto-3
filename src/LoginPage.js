import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './App';
import { theme } from './theme';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Email et mot de passe sont requis');
      return;
    }

    if (!isLogin) {
      // Registration validation
      if (!formData.name) {
        setError('Le nom est requis pour l\'inscription');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return;
      }
      if (formData.password.length < 6) {
        setError('Le mot de passe doit contenir au moins 6 caractères');
        return;
      }
    }

    // Simulate authentication (in real app, this would be an API call)
    const userData = {
      email: formData.email,
      name: formData.name || formData.email.split('@')[0]
    };

    login(userData);
    navigate('/dashboard');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
    setError('');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.fonts.main,
      padding: theme.spacing
    },
    card: {
      background: theme.colors.surface,
      borderRadius: theme.borderRadius,
      padding: theme.spacing * 2,
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: theme.spacing * 2
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing
    },
    input: {
      padding: theme.spacing,
      border: `2px solid ${theme.colors.background}`,
      borderRadius: theme.borderRadius,
      fontSize: '16px',
      fontFamily: theme.fonts.main,
      outline: 'none',
      transition: 'border-color 0.3s ease',
      ':focus': {
        borderColor: theme.colors.accent
      }
    },
    button: {
      padding: theme.spacing,
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`,
      color: theme.colors.surface,
      border: 'none',
      borderRadius: theme.borderRadius,
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      ':hover': {
        transform: 'translateY(-2px)'
      }
    },
    error: {
      color: theme.colors.danger,
      fontSize: '14px',
      textAlign: 'center',
      padding: theme.spacing / 2
    },
    toggleText: {
      textAlign: 'center',
      marginTop: theme.spacing,
      color: theme.colors.muted
    },
    toggleButton: {
      background: 'none',
      border: 'none',
      color: theme.colors.accent,
      cursor: 'pointer',
      textDecoration: 'underline',
      fontFamily: theme.fonts.main
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          {isLogin ? 'Connexion' : 'Inscription'}
        </h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer le mot de passe"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              style={styles.input}
            />
          )}
          {error && <div style={styles.error}>{error}</div>}
          <button type="submit" style={styles.button}>
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>
        </form>
        <div style={styles.toggleText}>
          {isLogin ? 'Pas encore de compte ? ' : 'Déjà un compte ? '}
          <button onClick={toggleMode} style={styles.toggleButton}>
            {isLogin ? 'S\'inscrire' : 'Se connecter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;