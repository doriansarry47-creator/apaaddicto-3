import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication on app load
    const storedUser = localStorage.getItem('apaaddicto_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('apaaddicto_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password, role) => {
    // Simple demo authentication - in real app, this would call an API
    const demoCredentials = {
      admin: { email: 'admin@apaaddicto.com', password: 'admin123' },
      patient: { email: 'patient@apaaddicto.com', password: 'patient123' }
    };

    if (
      demoCredentials[role] &&
      demoCredentials[role].email === email &&
      demoCredentials[role].password === password
    ) {
      const userData = {
        id: role === 'admin' ? 1 : 2,
        email,
        role,
        name: role === 'admin' ? 'Dr. Admin' : 'John Patient',
        loginTime: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('apaaddicto_user', JSON.stringify(userData));
      return { success: true };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('apaaddicto_user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isPatient: user?.role === 'patient'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};