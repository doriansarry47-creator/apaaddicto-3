import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const loginStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: `${theme.spacing * 4}px ${theme.spacing * 2}px`,
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 3}px`,
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: `${theme.spacing * 3}px`,
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: `${theme.spacing}px`,
  },
  subtitle: {
    fontSize: '16px',
    color: theme.colors.muted,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: `${theme.spacing * 2}px`,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: `${theme.spacing / 2}px`,
  },
  input: {
    padding: `${theme.spacing}px`,
    border: `2px solid ${theme.colors.primary}40`,
    borderRadius: theme.borderRadius,
    fontSize: '16px',
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.background,
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: theme.colors.primary,
    outline: 'none',
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface,
    border: 'none',
    padding: `${theme.spacing * 1.5}px`,
    borderRadius: theme.borderRadius,
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: `${theme.spacing}px`,
  },
  buttonHover: {
    backgroundColor: theme.colors.secondary,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: `${theme.spacing}px`,
  },
  link: {
    color: theme.colors.primary,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: `${theme.spacing * 2}px 0`,
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: theme.colors.muted,
    opacity: 0.3,
  },
  dividerText: {
    margin: `0 ${theme.spacing}px`,
    fontSize: '14px',
    color: theme.colors.muted,
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: `${theme.spacing}px`,
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing}px`,
    border: `1px solid ${theme.colors.primary}40`,
    borderRadius: theme.borderRadius,
    backgroundColor: 'transparent',
    color: theme.colors.text,
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  socialIcon: {
    marginRight: `${theme.spacing}px`,
    fontSize: '20px',
  },
  signup: {
    textAlign: 'center',
    marginTop: `${theme.spacing * 2}px`,
    padding: `${theme.spacing}px`,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius,
  },
  signupText: {
    fontSize: '14px',
    color: theme.colors.muted,
    marginBottom: `${theme.spacing / 2}px`,
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: `${theme.spacing}px`,
  },
  checkboxInput: {
    marginRight: `${theme.spacing / 2}px`,
  },
  checkboxLabel: {
    fontSize: '14px',
    color: theme.colors.text,
  },
};

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      alert('Login successful! Redirecting to dashboard...');
      setIsLoading(false);
      // In a real app, you would redirect to the dashboard
      window.location.href = '/dashboard';
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login functionality would be implemented here`);
  };

  return (
    <div style={loginStyles.container}>
      <div style={loginStyles.card}>
        <div style={loginStyles.header}>
          <h1 style={loginStyles.title}>Welcome Back</h1>
          <p style={loginStyles.subtitle}>
            Sign in to your account to continue your digital wellness journey
          </p>
        </div>

        <form style={loginStyles.form} onSubmit={handleSubmit}>
          <div style={loginStyles.inputGroup}>
            <label style={loginStyles.label}>Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              style={loginStyles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={loginStyles.inputGroup}>
            <label style={loginStyles.label}>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              style={loginStyles.input}
              placeholder="Enter your password"
              required
            />
          </div>

          <div style={loginStyles.checkbox}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
              style={loginStyles.checkboxInput}
            />
            <label htmlFor="rememberMe" style={loginStyles.checkboxLabel}>
              Remember me for 30 days
            </label>
          </div>

          <button 
            type="submit" 
            style={loginStyles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={loginStyles.forgotPassword}>
          <Link to="/forgot-password" style={loginStyles.link}>
            Forgot your password?
          </Link>
        </div>

        <div style={loginStyles.divider}>
          <div style={loginStyles.dividerLine}></div>
          <span style={loginStyles.dividerText}>or continue with</span>
          <div style={loginStyles.dividerLine}></div>
        </div>

        <div style={loginStyles.socialButtons}>
          <button
            onClick={() => handleSocialLogin('Google')}
            style={loginStyles.socialButton}
          >
            <span style={loginStyles.socialIcon}>🔍</span>
            Continue with Google
          </button>
          <button
            onClick={() => handleSocialLogin('Apple')}
            style={loginStyles.socialButton}
          >
            <span style={loginStyles.socialIcon}>🍎</span>
            Continue with Apple
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            style={loginStyles.socialButton}
          >
            <span style={loginStyles.socialIcon}>📘</span>
            Continue with Facebook
          </button>
        </div>

        <div style={loginStyles.signup}>
          <div style={loginStyles.signupText}>Don't have an account?</div>
          <Link to="/signup" style={loginStyles.link}>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
