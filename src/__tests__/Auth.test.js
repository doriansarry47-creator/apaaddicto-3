import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';
import { MemoryRouter } from 'react-router-dom';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

const TestWrapper = ({ children, initialEntries = ['/'] }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </MemoryRouter>
);

// Test component to check authentication state
const AuthTestComponent = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <div>
      <div data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
      <div data-testid="user-role">{user?.role || 'no-role'}</div>
      <div data-testid="user-name">{user?.name || 'no-name'}</div>
    </div>
  );
};

describe('Authentication System', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
  });

  test('authentication context provides default unauthenticated state', () => {
    render(
      <TestWrapper>
        <AuthTestComponent />
      </TestWrapper>
    );
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
    expect(screen.getByTestId('user-role')).toHaveTextContent('no-role');
    expect(screen.getByTestId('user-name')).toHaveTextContent('no-name');
  });

  test('authentication context loads user from localStorage', () => {
    const mockUser = {
      id: 1,
      email: 'admin@apaaddicto.com',
      role: 'admin',
      name: 'Dr. Admin',
      loginTime: '2024-01-01T00:00:00.000Z'
    };
    
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUser));
    
    render(
      <TestWrapper>
        <AuthTestComponent />
      </TestWrapper>
    );
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
    expect(screen.getByTestId('user-role')).toHaveTextContent('admin');
    expect(screen.getByTestId('user-name')).toHaveTextContent('Dr. Admin');
  });

  test('login form displays with role selection', () => {
    render(
      <TestWrapper initialEntries={['/login']}>
        <LoginPage />
      </TestWrapper>
    );
    
    expect(screen.getByLabelText('Role')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('demo credential buttons populate form correctly', () => {
    render(
      <TestWrapper initialEntries={['/login']}>
        <LoginPage />
      </TestWrapper>
    );
    
    // Test admin demo button
    const adminDemoButton = screen.getByText('Admin Demo');
    fireEvent.click(adminDemoButton);
    
    expect(screen.getByLabelText('Email')).toHaveValue('admin@apaaddicto.com');
    expect(screen.getByLabelText('Password')).toHaveValue('admin123');
    expect(screen.getByLabelText('Role')).toHaveValue('admin');
    
    // Test patient demo button
    const patientDemoButton = screen.getByText('Patient Demo');
    fireEvent.click(patientDemoButton);
    
    expect(screen.getByLabelText('Email')).toHaveValue('patient@apaaddicto.com');
    expect(screen.getByLabelText('Password')).toHaveValue('patient123');
    expect(screen.getByLabelText('Role')).toHaveValue('patient');
  });

  test('invalid credentials show error message', async () => {
    render(
      <TestWrapper initialEntries={['/login']}>
        <LoginPage />
      </TestWrapper>
    );
    
    // Fill invalid credentials
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid@email.com' }
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'wrongpassword' }
    });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(submitButton);
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });

  test('admin dashboard shows admin-specific content', () => {
    const mockUser = {
      id: 1,
      email: 'admin@apaaddicto.com',
      role: 'admin',
      name: 'Dr. Admin',
      loginTime: '2024-01-01T00:00:00.000Z'
    };
    
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUser));
    
    render(
      <TestWrapper initialEntries={['/dashboard']}>
        <DashboardPage />
      </TestWrapper>
    );
    
    expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Welcome back, Dr. Admin!')).toBeInTheDocument();
    expect(screen.getByText('Manage Users')).toBeInTheDocument();
    expect(screen.getByText('System Settings')).toBeInTheDocument();
    expect(screen.getByText('System Overview')).toBeInTheDocument();
  });

  test('patient dashboard shows patient-specific content', () => {
    const mockUser = {
      id: 2,
      email: 'patient@apaaddicto.com',
      role: 'patient',
      name: 'John Patient',
      loginTime: '2024-01-01T00:00:00.000Z'
    };
    
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUser));
    
    render(
      <TestWrapper initialEntries={['/dashboard']}>
        <DashboardPage />
      </TestWrapper>
    );
    
    expect(screen.getByText('Patient Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Welcome back, John Patient!')).toBeInTheDocument();
    expect(screen.getByText('View Appointments')).toBeInTheDocument();
    expect(screen.getByText('Medical Records')).toBeInTheDocument();
    expect(screen.getByText('Health Summary')).toBeInTheDocument();
  });

  test('dashboard displays correct user information', () => {
    const mockUser = {
      id: 1,
      email: 'admin@apaaddicto.com',
      role: 'admin',
      name: 'Dr. Admin',
      loginTime: '2024-01-01T00:00:00.000Z'
    };
    
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUser));
    
    render(
      <TestWrapper>
        <DashboardPage />
      </TestWrapper>
    );
    
    expect(screen.getByText('admin')).toBeInTheDocument();
    expect(screen.getByText('admin@apaaddicto.com')).toBeInTheDocument();
    expect(screen.getByText('Dr. Admin')).toBeInTheDocument();
  });
});