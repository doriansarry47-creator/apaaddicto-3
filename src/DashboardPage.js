import React, { useState } from 'react';
import { theme } from './theme';

const dashboardStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${theme.spacing * 2}px`,
  },
  header: {
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: `${theme.spacing * 2}px`,
    marginBottom: `${theme.spacing * 3}px`,
  },
  statCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: `${theme.spacing / 2}px`,
  },
  statLabel: {
    fontSize: '14px',
    color: theme.colors.muted,
    marginBottom: `${theme.spacing / 2}px`,
  },
  statTrend: {
    fontSize: '12px',
    fontWeight: '600',
  },
  trendUp: {
    color: theme.colors.danger,
  },
  trendDown: {
    color: '#4CAF50',
  },
  chartSection: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    marginBottom: `${theme.spacing * 3}px`,
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: `${theme.spacing * 2}px`,
  },
  appList: {
    display: 'grid',
    gap: `${theme.spacing}px`,
  },
  appItem: {
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing}px`,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius,
    border: `1px solid ${theme.colors.primary}20`,
  },
  appIcon: {
    fontSize: '24px',
    marginRight: `${theme.spacing}px`,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: '8px',
    color: theme.colors.surface,
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: `${theme.spacing / 4}px`,
  },
  appUsage: {
    fontSize: '14px',
    color: theme.colors.muted,
  },
  usageBar: {
    width: '100px',
    height: '8px',
    backgroundColor: theme.colors.background,
    borderRadius: '4px',
    marginLeft: `${theme.spacing}px`,
    overflow: 'hidden',
  },
  usageProgress: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  timeFilters: {
    display: 'flex',
    gap: `${theme.spacing}px`,
    marginBottom: `${theme.spacing * 2}px`,
  },
  filterButton: {
    padding: `${theme.spacing / 2}px ${theme.spacing}px`,
    border: `1px solid ${theme.colors.primary}`,
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  activeFilter: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface,
  },
  goalSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: `${theme.spacing * 2}px`,
  },
  goalCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  goalProgress: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: `${theme.spacing}px`,
  },
  goalTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.text,
  },
  goalPercentage: {
    fontSize: '14px',
    fontWeight: '600',
    color: theme.colors.primary,
  },
  progressBarContainer: {
    width: '100%',
    height: '8px',
    backgroundColor: theme.colors.background,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
};

function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState('today');

  const stats = [
    {
      number: '3.2h',
      label: 'Today\'s Usage',
      trend: '+15%',
      trendUp: true
    },
    {
      number: '22.4h',
      label: 'This Week',
      trend: '-8%',
      trendUp: false
    },
    {
      number: '4.5h',
      label: 'Daily Average',
      trend: '-12%',
      trendUp: false
    },
    {
      number: '87%',
      label: 'Goal Progress',
      trend: '+23%',
      trendUp: false
    }
  ];

  const appUsage = [
    { name: 'Social Media', icon: '📱', time: '1.5h', percentage: 75 },
    { name: 'Messaging', icon: '💬', time: '45m', percentage: 45 },
    { name: 'Games', icon: '🎮', time: '30m', percentage: 30 },
    { name: 'News', icon: '📰', time: '25m', percentage: 25 },
    { name: 'Video Streaming', icon: '🎥', time: '20m', percentage: 20 },
    { name: 'Music', icon: '🎵', time: '15m', percentage: 15 },
  ];

  const goals = [
    {
      title: 'Daily Screen Time Limit',
      current: 3.2,
      target: 4.0,
      percentage: 80,
      color: theme.colors.primary
    },
    {
      title: 'Social Media Limit',
      current: 1.5,
      target: 1.0,
      percentage: 150,
      color: theme.colors.danger
    },
    {
      title: 'Break Frequency',
      current: 6,
      target: 8,
      percentage: 75,
      color: theme.colors.secondary
    }
  ];

  const timeFilters = [
    { key: 'today', label: 'Today' },
    { key: 'week', label: 'This Week' },
    { key: 'month', label: 'This Month' },
    { key: 'year', label: 'This Year' }
  ];

  return (
    <div style={dashboardStyles.container}>
      <div style={dashboardStyles.header}>
        <h1 style={dashboardStyles.title}>Dashboard</h1>
        <p style={dashboardStyles.subtitle}>
          Monitor your app usage and track your progress towards digital wellness goals
        </p>
      </div>

      <div style={dashboardStyles.timeFilters}>
        {timeFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            style={{
              ...dashboardStyles.filterButton,
              ...(activeFilter === filter.key ? dashboardStyles.activeFilter : {})
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div style={dashboardStyles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={dashboardStyles.statCard}>
            <div style={dashboardStyles.statNumber}>{stat.number}</div>
            <div style={dashboardStyles.statLabel}>{stat.label}</div>
            <div style={{
              ...dashboardStyles.statTrend,
              ...(stat.trendUp ? dashboardStyles.trendUp : dashboardStyles.trendDown)
            }}>
              {stat.trend} from last {activeFilter}
            </div>
          </div>
        ))}
      </div>

      <div style={dashboardStyles.chartSection}>
        <h2 style={dashboardStyles.sectionTitle}>App Usage Breakdown</h2>
        <div style={dashboardStyles.appList}>
          {appUsage.map((app, index) => (
            <div key={index} style={dashboardStyles.appItem}>
              <div style={dashboardStyles.appIcon}>{app.icon}</div>
              <div style={dashboardStyles.appInfo}>
                <div style={dashboardStyles.appName}>{app.name}</div>
                <div style={dashboardStyles.appUsage}>{app.time}</div>
              </div>
              <div style={dashboardStyles.usageBar}>
                <div 
                  style={{
                    ...dashboardStyles.usageProgress,
                    width: `${app.percentage}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={dashboardStyles.chartSection}>
        <h2 style={dashboardStyles.sectionTitle}>Goals & Progress</h2>
        <div style={dashboardStyles.goalSection}>
          {goals.map((goal, index) => (
            <div key={index} style={dashboardStyles.goalCard}>
              <div style={dashboardStyles.goalProgress}>
                <span style={dashboardStyles.goalTitle}>{goal.title}</span>
                <span style={dashboardStyles.goalPercentage}>
                  {goal.current}h / {goal.target}h
                </span>
              </div>
              <div style={dashboardStyles.progressBarContainer}>
                <div 
                  style={{
                    ...dashboardStyles.progressBar,
                    width: `${Math.min(goal.percentage, 100)}%`,
                    backgroundColor: goal.percentage > 100 ? theme.colors.danger : goal.color
                  }}
                />
              </div>
              <div style={{
                fontSize: '12px',
                color: goal.percentage > 100 ? theme.colors.danger : theme.colors.muted,
                marginTop: `${theme.spacing / 2}px`,
                fontWeight: '500'
              }}>
                {goal.percentage > 100 ? 'Over target' : `${goal.percentage}% of target`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
