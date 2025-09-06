import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  padding: ${props => props.theme.spacing}px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing * 2}px;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing}px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: white;
  padding: 10px 15px;
  border-radius: ${props => props.theme.borderRadius};
  transition: background-color 0.3s ease;
  background-color: ${props => props.isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  padding: 5px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/progress', label: 'Progress' },
    { path: '/profile', label: 'Profile' },
    { path: '/settings', label: 'Settings' },
    { path: '/login', label: 'Login' }
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Apaaddicto 3</Logo>
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MobileToggle>
        <NavLinks isOpen={isOpen}>
          {navItems.map(item => (
            <NavLink 
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;