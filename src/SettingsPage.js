import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: ${props => props.theme.spacing * 3}px ${props => props.theme.spacing}px;
  max-width: 800px;
  margin: 0 auto;
`;

const SettingsCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;

const SettingGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing * 2}px;
  padding-bottom: ${props => props.theme.spacing * 2}px;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const SettingLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing}px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const SettingDescription = styled.p`
  color: ${props => props.theme.colors.muted};
  font-size: 0.9rem;
  margin-bottom: ${props => props.theme.spacing}px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing}px;
`;

const ToggleSwitch = styled.div`
  width: 50px;
  height: 26px;
  background: ${props => props.enabled ? props.theme.colors.primary : '#e0e0e0'};
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${props => props.enabled ? '26px' : '2px'};
    transition: left 0.3s ease;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  margin-right: ${props => props.theme.spacing}px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const DangerButton = styled(Button)`
  background: ${props => props.theme.colors.danger};
  
  &:hover {
    background: #d43d26;
  }
`;

function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    dailyReminders: true,
    weeklyReports: false,
    reminderTime: '09:00',
    theme: 'light',
    goalDays: 90,
    privacy: 'private'
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  const handleExportData = () => {
    console.log('Exporting data...');
    alert('Data export initiated. You will receive an email with your data shortly.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deletion requested');
      alert('Account deletion initiated. You will receive a confirmation email.');
    }
  };

  return (
    <PageContainer>
      <h1>Settings</h1>
      
      <SettingsCard>
        <h3>Notifications</h3>
        
        <SettingGroup>
          <SettingLabel>Push Notifications</SettingLabel>
          <SettingDescription>Receive notifications for important updates and milestones</SettingDescription>
          <Toggle>
            <ToggleSwitch 
              enabled={settings.notifications} 
              onClick={() => handleToggle('notifications')}
            />
            <span>{settings.notifications ? 'Enabled' : 'Disabled'}</span>
          </Toggle>
        </SettingGroup>

        <SettingGroup>
          <SettingLabel>Daily Reminders</SettingLabel>
          <SettingDescription>Get daily check-in reminders</SettingDescription>
          <Toggle>
            <ToggleSwitch 
              enabled={settings.dailyReminders} 
              onClick={() => handleToggle('dailyReminders')}
            />
            <span>{settings.dailyReminders ? 'Enabled' : 'Disabled'}</span>
          </Toggle>
        </SettingGroup>

        {settings.dailyReminders && (
          <SettingGroup>
            <SettingLabel>Reminder Time</SettingLabel>
            <Input
              type="time"
              value={settings.reminderTime}
              onChange={(e) => handleChange('reminderTime', e.target.value)}
            />
          </SettingGroup>
        )}

        <SettingGroup>
          <SettingLabel>Weekly Progress Reports</SettingLabel>
          <SettingDescription>Receive weekly progress summaries via email</SettingDescription>
          <Toggle>
            <ToggleSwitch 
              enabled={settings.weeklyReports} 
              onClick={() => handleToggle('weeklyReports')}
            />
            <span>{settings.weeklyReports ? 'Enabled' : 'Disabled'}</span>
          </Toggle>
        </SettingGroup>
      </SettingsCard>

      <SettingsCard>
        <h3>Goals & Preferences</h3>
        
        <SettingGroup>
          <SettingLabel>Goal Duration (Days)</SettingLabel>
          <SettingDescription>Set your primary recovery goal in days</SettingDescription>
          <Input
            type="number"
            min="1"
            max="1000"
            value={settings.goalDays}
            onChange={(e) => handleChange('goalDays', parseInt(e.target.value))}
          />
        </SettingGroup>

        <SettingGroup>
          <SettingLabel>Theme</SettingLabel>
          <SettingDescription>Choose your preferred app theme</SettingDescription>
          <Select
            value={settings.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </Select>
        </SettingGroup>

        <SettingGroup>
          <SettingLabel>Privacy</SettingLabel>
          <SettingDescription>Control who can see your progress</SettingDescription>
          <Select
            value={settings.privacy}
            onChange={(e) => handleChange('privacy', e.target.value)}
          >
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
            <option value="public">Public</option>
          </Select>
        </SettingGroup>
      </SettingsCard>

      <SettingsCard>
        <h3>Account</h3>
        
        <SettingGroup>
          <SettingLabel>Data Export</SettingLabel>
          <SettingDescription>Download a copy of your data</SettingDescription>
          <Button onClick={handleExportData}>Export Data</Button>
        </SettingGroup>

        <SettingGroup>
          <SettingLabel>Delete Account</SettingLabel>
          <SettingDescription>Permanently delete your account and all data</SettingDescription>
          <DangerButton onClick={handleDeleteAccount}>Delete Account</DangerButton>
        </SettingGroup>
      </SettingsCard>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Button onClick={handleSave}>Save All Changes</Button>
      </div>
    </PageContainer>
  );
}

export default SettingsPage;