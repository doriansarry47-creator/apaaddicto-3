import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: ${props => props.theme.spacing * 3}px ${props => props.theme.spacing}px;
  max-width: 1200px;
  margin: 0 auto;
`;

const WelcomeCard = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  margin-bottom: ${props => props.theme.spacing * 2}px;
  text-align: center;
`;

const WelcomeTitle = styled.h1`
  margin-bottom: 10px;
`;

const StreakDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: ${props => props.theme.spacing}px 0;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing * 2}px;
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;

const QuickActionCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing}px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardContent = styled.div`
  color: ${props => props.theme.colors.muted};
  margin-bottom: ${props => props.theme.spacing}px;
`;

const Button = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const CheckInButton = styled.button`
  background: ${props => props.completed ? props.theme.colors.primary : props.theme.colors.accent};
  color: white;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  margin-top: ${props => props.theme.spacing}px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing}px;
  margin-top: ${props => props.theme.spacing * 2}px;
`;

const StatCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 1.5}px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.muted};
  font-size: 0.9rem;
`;

const MotivationalQuote = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  text-align: center;
  font-style: italic;
  color: ${props => props.theme.colors.text};
  border-left: 4px solid ${props => props.theme.colors.primary};
`;

function DashboardPage() {
  const [currentStreak, setCurrentStreak] = useState(15);
  const [todayCheckedIn, setTodayCheckedIn] = useState(false);
  const [mood, setMood] = useState(null);

  const motivationalQuotes = [
    "Every day is a new beginning. Take a deep breath and start again.",
    "You are stronger than you think and more capable than you imagine.",
    "Progress, not perfection. Every step forward counts.",
    "The only way out is through. Keep going.",
    "Your strength lies in your ability to start over, again and again."
  ];

  const [todayQuote] = useState(
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );

  useEffect(() => {
    // Check if user already checked in today
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const today = new Date().toDateString();
    if (lastCheckIn === today) {
      setTodayCheckedIn(true);
    }
  }, []);

  const handleDailyCheckIn = () => {
    const today = new Date().toDateString();
    localStorage.setItem('lastCheckIn', today);
    setTodayCheckedIn(true);
    setCurrentStreak(prev => prev + 1);
    alert('Daily check-in completed! Keep up the great work! 🎉');
  };

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    localStorage.setItem('todayMood', selectedMood);
  };

  return (
    <DashboardContainer>
      <WelcomeCard>
        <WelcomeTitle>Welcome back! 👋</WelcomeTitle>
        <p>You're doing amazing on your recovery journey</p>
        <StreakDisplay>{currentStreak} Days</StreakDisplay>
        <p>Current streak - Keep it going!</p>
      </WelcomeCard>

      <DashboardGrid>
        <QuickActionCard>
          <CardTitle>
            📝 Daily Check-in
          </CardTitle>
          <CardContent>
            {todayCheckedIn 
              ? "Great job! You've already checked in today." 
              : "Complete your daily check-in to maintain your streak."
            }
          </CardContent>
          <CheckInButton 
            onClick={handleDailyCheckIn}
            completed={todayCheckedIn}
            disabled={todayCheckedIn}
          >
            {todayCheckedIn ? '✅ Checked In' : 'Complete Check-in'}
          </CheckInButton>
        </QuickActionCard>

        <QuickActionCard>
          <CardTitle>
            😊 How are you feeling?
          </CardTitle>
          <CardContent>
            Track your mood to identify patterns and triggers.
          </CardContent>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
            {['😞', '😐', '😊', '😄', '🤩'].map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleMoodSelect(index + 1)}
                style={{
                  background: mood === index + 1 ? '#84fab0' : 'transparent',
                  border: '2px solid #e0e0e0',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                {emoji}
              </button>
            ))}
          </div>
        </QuickActionCard>

        <QuickActionCard>
          <CardTitle>
            📊 View Progress
          </CardTitle>
          <CardContent>
            See your detailed progress charts and milestone achievements.
          </CardContent>
          <Button to="/progress">View Progress</Button>
        </QuickActionCard>

        <QuickActionCard>
          <CardTitle>
            👤 My Profile
          </CardTitle>
          <CardContent>
            Update your profile information and view your stats.
          </CardContent>
          <Button to="/profile">Manage Profile</Button>
        </QuickActionCard>
      </DashboardGrid>

      <StatsRow>
        <StatCard>
          <StatValue>15</StatValue>
          <StatLabel>Current Streak</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>45</StatValue>
          <StatLabel>Longest Streak</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>120</StatValue>
          <StatLabel>Total Days</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>83%</StatValue>
          <StatLabel>Success Rate</StatLabel>
        </StatCard>
      </StatsRow>

      <MotivationalQuote>
        "{todayQuote}"
      </MotivationalQuote>
    </DashboardContainer>
  );
}

export default DashboardPage;
