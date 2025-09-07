import React, { createContext, useContext, useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);

  const login = async (patientData) => {
    setIsLoading(true);
    try {
      // Simulate API call - in real app, this would be a backend call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would fetch user data from the backend based on login credentials
      // For now, we'll get the existing user data from localStorage if it exists
      const existingPatient = localStorage.getItem('patient');
      if (existingPatient) {
        const userData = JSON.parse(existingPatient);
        userData.lastLogin = new Date().toISOString();
        setUser(userData);
        localStorage.setItem('patient', JSON.stringify(userData));
        return { success: true };
      } else {
        // If no existing patient data, create a basic user (in real app, this would validate credentials)
        const userData = {
          id: Date.now(),
          email: patientData.email,
          firstName: 'Patient',
          lastName: 'Utilisateur',
          lastLogin: new Date().toISOString(),
          medicalHistory: [],
          appointments: [],
          medications: []
        };
        
        setUser(userData);
        localStorage.setItem('patient', JSON.stringify(userData));
        return { success: true };
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (patientData) => {
    setIsLoading(true);
    try {
      // Simulate API call for registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now(),
        firstName: patientData.firstName,
        lastName: patientData.lastName,
        email: patientData.email,
        phone: patientData.phone,
        dateOfBirth: patientData.dateOfBirth,
        gender: patientData.gender,
        address: patientData.address,
        registrationDate: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        medicalHistory: [],
        appointments: [],
        medications: []
      };
      
      setUser(userData);
      localStorage.setItem('patient', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('patient');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('patient', JSON.stringify(updatedUser));
  };

  // Check for existing session on component mount
  React.useEffect(() => {
    const savedPatient = localStorage.getItem('patient');
    if (savedPatient) {
      setUser(JSON.parse(savedPatient));
    }
  }, []);

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};