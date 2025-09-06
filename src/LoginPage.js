import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing}px;
`;

const LoginCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 3}px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;

const LogoIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin: 0 auto ${props => props.theme.spacing}px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing * 1.5}px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
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

const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing}px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.colors.accent};
  border: 2px solid ${props => props.theme.colors.accent};
`;

const ForgotLink = styled(Link)`
  display: block;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: ${props => props.theme.spacing}px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const DemoNote = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing}px;
  margin-top: ${props => props.theme.spacing * 2}px;
  text-align: center;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.muted};
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, accept any email/password
      if (email && password) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        alert('Please enter both email and password');
      }
    }, 1500);
  };

  const handleDemoLogin = () => {
    setEmail('demo@apaaddicto.com');
    setPassword('demo123');
    setTimeout(() => {
      handleLogin({ preventDefault: () => {} });
    }, 100);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <LogoIcon>🛡️</LogoIcon>
          <h2>Apaaddicto 3</h2>
        </Logo>
        
        <Title>Welcome Back</Title>
        
        <form onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        
        <SecondaryButton onClick={handleDemoLogin}>
          Try Demo Account
        </SecondaryButton>
        
        <ForgotLink to="/forgot-password">
          Forgot your password?
        </ForgotLink>
        
        <DemoNote>
          <strong>Demo Mode:</strong> Use any email and password to explore the application.
          Your progress will be saved locally during this session.
        </DemoNote>
      </LoginCard>
    </LoginContainer>
  );
}

export default LoginPage;
