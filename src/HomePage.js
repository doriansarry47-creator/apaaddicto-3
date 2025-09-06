import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const homeStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${theme.spacing * 2}px`,
  },
  hero: {
    textAlign: 'center',
    padding: `${theme.spacing * 4}px 0`,
    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
    borderRadius: theme.borderRadius,
    color: theme.colors.surface,
    marginBottom: `${theme.spacing * 4}px`,
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: `${theme.spacing}px`,
    fontFamily: theme.fonts.main,
  },
  heroSubtitle: {
    fontSize: '20px',
    marginBottom: `${theme.spacing * 3}px`,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: theme.colors.surface,
    color: theme.colors.primary,
    border: 'none',
    padding: `${theme.spacing}px ${theme.spacing * 3}px`,
    borderRadius: theme.borderRadius,
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: `${theme.spacing * 3}px`,
    marginBottom: `${theme.spacing * 4}px`,
  },
  featureCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: `${theme.spacing}px`,
    color: theme.colors.primary,
  },
  featureTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: `${theme.spacing}px`,
    color: theme.colors.text,
  },
  featureDescription: {
    fontSize: '16px',
    color: theme.colors.muted,
    lineHeight: '1.5',
  },
  statsSection: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 3}px`,
    marginBottom: `${theme.spacing * 4}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  statsTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: `${theme.spacing * 2}px`,
    color: theme.colors.text,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: `${theme.spacing * 2}px`,
  },
  statItem: {
    textAlign: 'center',
    padding: `${theme.spacing}px`,
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: `${theme.spacing / 2}px`,
  },
  statLabel: {
    fontSize: '16px',
    color: theme.colors.muted,
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: `${theme.spacing * 2}px`,
  },
  actionCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.surface,
    border: 'none',
    padding: `${theme.spacing}px ${theme.spacing * 2}px`,
    borderRadius: theme.borderRadius,
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    width: '100%',
  },
};

function HomePage() {
  const features = [
    {
      icon: '📊',
      title: 'Usage Analytics',
      description: 'Track your app usage patterns with detailed analytics and insights to understand your digital habits.'
    },
    {
      icon: '⏰',
      title: 'Time Management',
      description: 'Set daily limits, schedule breaks, and get reminders to maintain a healthy balance with your devices.'
    },
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Create personalized goals for reducing screen time and track your progress over time.'
    },
    {
      icon: '🔒',
      title: 'App Blocking',
      description: 'Temporarily block distracting apps during focus periods or when you need to take a break.'
    },
    {
      icon: '📈',
      title: 'Progress Reports',
      description: 'Get weekly and monthly reports showing your improvement and usage trends.'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Earn badges and rewards as you reach your digital wellness milestones.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '25%', label: 'Average Reduction' },
    { number: '4.8', label: 'User Rating' },
    { number: '500K+', label: 'Hours Saved' }
  ];

  return (
    <div style={homeStyles.container}>
      <div style={homeStyles.hero}>
        <h1 style={homeStyles.heroTitle}>Take Control of Your Digital Life</h1>
        <p style={homeStyles.heroSubtitle}>
          Apaaddicto 3 helps you build healthier relationships with technology through 
          smart tracking, mindful usage, and personalized insights.
        </p>
        <Link to="/dashboard" style={homeStyles.ctaButton}>
          Get Started
        </Link>
      </div>

      <div style={homeStyles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} style={homeStyles.featureCard}>
            <div style={homeStyles.featureIcon}>{feature.icon}</div>
            <h3 style={homeStyles.featureTitle}>{feature.title}</h3>
            <p style={homeStyles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      <div style={homeStyles.statsSection}>
        <h2 style={homeStyles.statsTitle}>Join Thousands Who've Transformed Their Digital Habits</h2>
        <div style={homeStyles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={homeStyles.statItem}>
              <div style={homeStyles.statNumber}>{stat.number}</div>
              <div style={homeStyles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={homeStyles.quickActions}>
        <div style={homeStyles.actionCard}>
          <h3 style={{ marginBottom: `${theme.spacing}px`, color: theme.colors.text }}>
            Track Your Usage
          </h3>
          <p style={{ marginBottom: `${theme.spacing}px`, color: theme.colors.muted }}>
            Start monitoring your app usage patterns
          </p>
          <Link to="/dashboard" style={homeStyles.actionButton}>
            View Dashboard
          </Link>
        </div>
        
        <div style={homeStyles.actionCard}>
          <h3 style={{ marginBottom: `${theme.spacing}px`, color: theme.colors.text }}>
            Customize Settings
          </h3>
          <p style={{ marginBottom: `${theme.spacing}px`, color: theme.colors.muted }}>
            Set up your personal preferences and limits
          </p>
          <Link to="/settings" style={homeStyles.actionButton}>
            Open Settings
          </Link>
        </div>
        
        <div style={homeStyles.actionCard}>
          <h3 style={{ marginBottom: `${theme.spacing}px`, color: theme.colors.text }}>
            Manage Profile
          </h3>
          <p style={{ marginBottom: `${theme.spacing}px`, color: theme.colors.muted }}>
            Update your account and view your progress
          </p>
          <Link to="/profile" style={homeStyles.actionButton}>
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;