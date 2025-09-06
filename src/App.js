import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import NotFound from './NotFound';
import { theme } from './theme';

const appStyles = {
  app: {
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.background,
    minHeight: '100vh',
    color: theme.colors.text
  }
};

function App() {
  return (
    <div style={appStyles.app}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;