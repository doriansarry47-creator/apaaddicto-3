import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { theme } from './theme';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'patient'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = login(formData.email, formData.password, formData.role);
    
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error || 'Login failed');
    }
    
    setLoading(false);
  };

  const setDemoCredentials = (role) => {
    const credentials = {
      admin: { email: 'admin@apaaddicto.com', password: 'admin123' },
      patient: { email: 'patient@apaaddicto.com', password: 'patient123' }
    };
    
    setFormData({
      ...formData,
      email: credentials[role].email,
      password: credentials[role].password,
      role
    });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      padding: theme.spacing
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius,
      padding: theme.spacing * 2,
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    header: {
      textAlign: 'center',
      marginBottom: theme.spacing * 2,
      color: theme.colors.text
    },
    title: {
      fontSize: '28px',
      fontWeight: '600',
      marginBottom: theme.spacing / 2
    },
    subtitle: {
      color: theme.colors.muted,
      fontSize: '14px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing / 2
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: theme.colors.text
    },
    input: {
      padding: theme.spacing * 0.75,
      border: `1px solid ${theme.colors.muted}40`,
      borderRadius: theme.borderRadius,
      fontSize: '14px',
      transition: 'border-color 0.2s ease',
      fontFamily: theme.fonts.main
    },
    select: {
      padding: theme.spacing * 0.75,
      border: `1px solid ${theme.colors.muted}40`,
      borderRadius: theme.borderRadius,
      fontSize: '14px',
      backgroundColor: theme.colors.surface,
      fontFamily: theme.fonts.main
    },
    button: {
      padding: theme.spacing,
      border: 'none',
      borderRadius: theme.borderRadius,
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: theme.fonts.main
    },
    primaryButton: {
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: theme.colors.surface,
      color: theme.colors.accent,
      border: `1px solid ${theme.colors.accent}`,
      fontSize: '12px',
      padding: theme.spacing * 0.5
    },
    error: {
      color: theme.colors.danger,
      fontSize: '14px',
      textAlign: 'center',
      marginTop: theme.spacing / 2
    },
    demoSection: {
      marginTop: theme.spacing,
      padding: theme.spacing,
      backgroundColor: `${theme.colors.background}`,
      borderRadius: theme.borderRadius,
      textAlign: 'center'
    },
    demoTitle: {
      fontSize: '12px',
      color: theme.colors.muted,
      marginBottom: theme.spacing / 2
    },
    demoButtons: {
      display: 'flex',
      gap: theme.spacing / 2,
      justifyContent: 'center'
    },
    homeLink: {
      display: 'block',
      textAlign: 'center',
      marginTop: theme.spacing,
      color: theme.colors.accent,
      textDecoration: 'none',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Sign in to your Apaaddicto account</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="patient">Patient</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...styles.primaryButton,
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          {error && <div style={styles.error}>{error}</div>}
        </form>

        <div style={styles.demoSection}>
          <div style={styles.demoTitle}>Demo Credentials</div>
          <div style={styles.demoButtons}>
            <button
              type="button"
              onClick={() => setDemoCredentials('admin')}
              style={{
                ...styles.button,
                ...styles.secondaryButton
              }}
            >
              Admin Demo
            </button>
            <button
              type="button"
              onClick={() => setDemoCredentials('patient')}
              style={{
                ...styles.button,
                ...styles.secondaryButton
              }}
            >
              Patient Demo
            </button>
          </div>
        </div>

        <Link to="/" style={styles.homeLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;