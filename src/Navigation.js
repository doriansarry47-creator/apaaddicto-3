import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from './theme';

const navigationStyles = {
  nav: {
    backgroundColor: theme.colors.surface,
    borderBottom: `1px solid ${theme.colors.primary}`,
    padding: `${theme.spacing}px ${theme.spacing * 2}px`,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    textDecoration: 'none',
    fontFamily: theme.fonts.main
  },
  navLinks: {
    display: 'flex',
    gap: `${theme.spacing * 2}px`,
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: theme.colors.text,
    fontFamily: theme.fonts.main,
    fontWeight: '500',
    padding: `${theme.spacing / 2}px ${theme.spacing}px`,
    borderRadius: theme.borderRadius,
    transition: 'all 0.3s ease'
  },
  activeNavLink: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface
  }
};

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={navigationStyles.nav}>
      <div style={navigationStyles.container}>
        <Link to="/" style={navigationStyles.logo}>
          Apaaddicto 3
        </Link>
        <ul style={navigationStyles.navLinks}>
          <li>
            <Link 
              to="/" 
              style={{
                ...navigationStyles.navLink,
                ...(isActive('/') ? navigationStyles.activeNavLink : {})
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              style={{
                ...navigationStyles.navLink,
                ...(isActive('/dashboard') ? navigationStyles.activeNavLink : {})
              }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              style={{
                ...navigationStyles.navLink,
                ...(isActive('/profile') ? navigationStyles.activeNavLink : {})
              }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              style={{
                ...navigationStyles.navLink,
                ...(isActive('/settings') ? navigationStyles.activeNavLink : {})
              }}
            >
              Settings
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              style={{
                ...navigationStyles.navLink,
                ...(isActive('/login') ? navigationStyles.activeNavLink : {})
              }}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;