import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: ${props => props.theme.spacing * 4}px ${props => props.theme.spacing}px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing}px;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing * 2}px;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  padding: 15px 30px;
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease, backdrop-filter 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    backdrop-filter: blur(15px);
  }
`;

const FeaturesSection = styled.section`
  padding: ${props => props.theme.spacing * 4}px ${props => props.theme.spacing}px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing * 2}px;
  margin-top: ${props => props.theme.spacing * 3}px;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing}px;
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing}px;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.muted};
  line-height: 1.6;
`;

const StatsSection = styled.section`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing * 4}px ${props => props.theme.spacing}px;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing * 2}px;
  max-width: 800px;
  margin: ${props => props.theme.spacing * 3}px auto 0;
`;

const StatItem = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.muted};
`;

function HomePage() {
  const features = [
    {
      icon: '📊',
      title: 'Track Your Progress',
      description: 'Monitor your daily progress with visual calendars and detailed analytics to stay motivated on your recovery journey.'
    },
    {
      icon: '🎯',
      title: 'Set Personal Goals',
      description: 'Create achievable milestones and celebrate your victories, no matter how small they may seem.'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Get personalized notifications and reminders to help you stay on track with your daily check-ins.'
    },
    {
      icon: '🏆',
      title: 'Achievement System',
      description: 'Unlock achievements and build streak records to maintain motivation and recognize your progress.'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access your progress anywhere with a responsive design that works perfectly on all devices.'
    },
    {
      icon: '🔐',
      title: 'Privacy First',
      description: 'Your data is private and secure. Control who sees your progress with flexible privacy settings.'
    }
  ];

  return (
    <>
      <HeroSection>
        <HeroTitle>Welcome to Apaaddicto 3</HeroTitle>
        <HeroSubtitle>
          Your enhanced companion for addiction recovery and personal growth
        </HeroSubtitle>
        <CTAButton to="/dashboard">Start Your Journey</CTAButton>
      </HeroSection>

      <FeaturesSection>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>
          Enhanced Features
        </h2>
        <p style={{ textAlign: 'center', color: '#8ca6a6', fontSize: '1.1rem' }}>
          Version 3 brings powerful new tools to support your recovery journey
        </p>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <StatsSection>
        <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>
          Community Impact
        </h2>
        <p style={{ color: '#8ca6a6', fontSize: '1.1rem', marginBottom: '40px' }}>
          Join thousands of users on their recovery journey
        </p>
        
        <StatsGrid>
          <StatItem>
            <StatValue>10K+</StatValue>
            <StatLabel>Active Users</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>2.5M</StatValue>
            <StatLabel>Recovery Days</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>95%</StatValue>
            <StatLabel>Success Rate</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>24/7</StatValue>
            <StatLabel>Support Available</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>
    </>
  );
}

export default HomePage;