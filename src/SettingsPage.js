import React, { useState } from 'react';
import { theme } from './theme';

const settingsStyles = {
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
  settingsCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius,
    padding: `${theme.spacing * 2}px`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    marginBottom: `${theme.spacing * 2}px`,
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: `${theme.spacing * 2}px`,
    borderBottom: `2px solid ${theme.colors.primary}`,
    paddingBottom: `${theme.spacing}px`,
  },
  settingGroup: {
    marginBottom: `${theme.spacing * 2}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: `${theme.spacing / 4}px`,
  },
  settingDescription: {
    fontSize: '14px',
    color: theme.colors.muted,
  },
  toggle: {
    position: 'relative',
    width: '50px',
    height: '25px',
    backgroundColor: theme.colors.muted,
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  toggleActive: {
    backgroundColor: theme.colors.primary,
  },
  toggleSlider: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '21px',
    height: '21px',
    backgroundColor: theme.colors.surface,
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  },
  toggleSliderActive: {
    transform: 'translateX(25px)',
  },
  input: {
    padding: `${theme.spacing}px`,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius,
    fontSize: '14px',
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.background,
    width: '120px',
  },
  select: {
    padding: `${theme.spacing}px`,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius,
    fontSize: '14px',
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.background,
    width: '150px',
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
    marginTop: `${theme.spacing * 2}px`,
  },
  dangerButton: {
    backgroundColor: theme.colors.danger,
    marginLeft: `${theme.spacing}px`,
  },
};

function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    dataCollection: true,
    autoBreaks: true,
    weeklyReports: true,
    dailyLimit: '4',
    breakReminder: '30',
    theme: 'light',
    language: 'en',
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleInputChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        notifications: true,
        darkMode: false,
        dataCollection: true,
        autoBreaks: true,
        weeklyReports: true,
        dailyLimit: '4',
        breakReminder: '30',
        theme: 'light',
        language: 'en',
      });
    }
  };

  const ToggleSwitch = ({ isActive, onToggle }) => (
    <div 
      style={{
        ...settingsStyles.toggle,
        ...(isActive ? settingsStyles.toggleActive : {})
      }}
      onClick={onToggle}
    >
      <div 
        style={{
          ...settingsStyles.toggleSlider,
          ...(isActive ? settingsStyles.toggleSliderActive : {})
        }}
      />
    </div>
  );

  return (
    <div style={settingsStyles.container}>
      <div style={settingsStyles.header}>
        <h1 style={settingsStyles.title}>Settings</h1>
        <p style={settingsStyles.subtitle}>Customize your app experience and preferences</p>
      </div>

      <div style={settingsStyles.settingsCard}>
        <h2 style={settingsStyles.sectionTitle}>Notifications</h2>
        
        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Push Notifications</div>
            <div style={settingsStyles.settingDescription}>
              Receive notifications about app usage and reminders
            </div>
          </div>
          <ToggleSwitch 
            isActive={settings.notifications}
            onToggle={() => handleToggle('notifications')}
          />
        </div>

        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Break Reminders</div>
            <div style={settingsStyles.settingDescription}>
              Get notified to take breaks every
            </div>
          </div>
          <input
            type="number"
            value={settings.breakReminder}
            onChange={(e) => handleInputChange('breakReminder', e.target.value)}
            style={settingsStyles.input}
            min="5"
            max="120"
          />
          <span style={{ marginLeft: '8px', color: theme.colors.muted }}>minutes</span>
        </div>

        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Weekly Reports</div>
            <div style={settingsStyles.settingDescription}>
              Receive weekly usage summary reports
            </div>
          </div>
          <ToggleSwitch 
            isActive={settings.weeklyReports}
            onToggle={() => handleToggle('weeklyReports')}
          />
        </div>
      </div>

      <div style={settingsStyles.settingsCard}>
        <h2 style={settingsStyles.sectionTitle}>App Usage</h2>
        
        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Daily Usage Limit</div>
            <div style={settingsStyles.settingDescription}>
              Set maximum daily app usage hours
            </div>
          </div>
          <input
            type="number"
            value={settings.dailyLimit}
            onChange={(e) => handleInputChange('dailyLimit', e.target.value)}
            style={settingsStyles.input}
            min="1"
            max="12"
            step="0.5"
          />
          <span style={{ marginLeft: '8px', color: theme.colors.muted }}>hours</span>
        </div>

        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Auto Break Mode</div>
            <div style={settingsStyles.settingDescription}>
              Automatically enforce break periods
            </div>
          </div>
          <ToggleSwitch 
            isActive={settings.autoBreaks}
            onToggle={() => handleToggle('autoBreaks')}
          />
        </div>
      </div>

      <div style={settingsStyles.settingsCard}>
        <h2 style={settingsStyles.sectionTitle}>Appearance</h2>
        
        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Theme</div>
            <div style={settingsStyles.settingDescription}>
              Choose your preferred theme
            </div>
          </div>
          <select
            value={settings.theme}
            onChange={(e) => handleInputChange('theme', e.target.value)}
            style={settingsStyles.select}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Language</div>
            <div style={settingsStyles.settingDescription}>
              Select your preferred language
            </div>
          </div>
          <select
            value={settings.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            style={settingsStyles.select}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>

      <div style={settingsStyles.settingsCard}>
        <h2 style={settingsStyles.sectionTitle}>Privacy</h2>
        
        <div style={settingsStyles.settingGroup}>
          <div style={settingsStyles.settingInfo}>
            <div style={settingsStyles.settingLabel}>Data Collection</div>
            <div style={settingsStyles.settingDescription}>
              Allow anonymous usage data collection for app improvement
            </div>
          </div>
          <ToggleSwitch 
            isActive={settings.dataCollection}
            onToggle={() => handleToggle('dataCollection')}
          />
        </div>
      </div>

      <div>
        <button 
          onClick={handleSave}
          style={settingsStyles.button}
        >
          Save Settings
        </button>
        <button 
          onClick={handleReset}
          style={{
            ...settingsStyles.button,
            ...settingsStyles.dangerButton
          }}
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;