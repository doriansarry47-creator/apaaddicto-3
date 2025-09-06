import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: ${props => props.theme.spacing * 3}px ${props => props.theme.spacing}px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProgressCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;

const ChartContainer = styled.div`
  height: 300px;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacing}px 0;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: ${props => props.theme.spacing}px 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  width: ${props => props.percentage}%;
  transition: width 0.3s ease;
`;

const MilestoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing}px;
`;

const MilestoneCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 1.5}px;
  border-left: 4px solid ${props => props.completed ? props.theme.colors.primary : '#e0e0e0'};
  opacity: ${props => props.completed ? 1 : 0.7};
`;

const MilestoneTitle = styled.h4`
  margin: 0 0 10px 0;
  color: ${props => props.theme.colors.text};
`;

const MilestoneDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.muted};
  font-size: 0.9rem;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-top: ${props => props.theme.spacing}px;
`;

const DaySquare = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  background: ${props => {
    if (props.isToday) return props.theme.colors.accent;
    if (props.hasProgress) return props.theme.colors.primary;
    return '#e0e0e0';
  }};
  opacity: ${props => props.hasProgress ? 1 : 0.3};
  transition: opacity 0.2s ease;
`;

function ProgressPage() {
  const [currentStreak] = useState(15);
  const [goalDays] = useState(90);
  
  const milestones = [
    { days: 1, title: "First Day", description: "You've taken the first step!", completed: true },
    { days: 7, title: "One Week", description: "A full week of progress", completed: true },
    { days: 30, title: "One Month", description: "30 days of dedication", completed: false },
    { days: 90, title: "Three Months", description: "Quarter year milestone", completed: false },
    { days: 365, title: "One Year", description: "A full year of recovery", completed: false }
  ];

  const progressPercentage = Math.min((currentStreak / goalDays) * 100, 100);
  
  // Generate calendar data (last 50 days)
  const generateCalendarData = () => {
    const days = [];
    const today = new Date();
    for (let i = 49; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      days.push({
        date,
        hasProgress: i < currentStreak,
        isToday: i === 0
      });
    }
    return days;
  };

  const calendarData = generateCalendarData();

  return (
    <PageContainer>
      <h1>Progress Tracking</h1>
      
      <ProgressCard>
        <h3>Current Streak: {currentStreak} days</h3>
        <ProgressBar>
          <ProgressFill percentage={progressPercentage} />
        </ProgressBar>
        <p>{Math.round(progressPercentage)}% towards your {goalDays}-day goal</p>
      </ProgressCard>

      <ProgressCard>
        <h3>Daily Progress Calendar</h3>
        <p>Each square represents a day. Green squares show successful days.</p>
        <CalendarGrid>
          {calendarData.map((day, index) => (
            <DaySquare
              key={index}
              hasProgress={day.hasProgress}
              isToday={day.isToday}
              title={day.date.toDateString()}
            />
          ))}
        </CalendarGrid>
      </ProgressCard>

      <ProgressCard>
        <h3>Progress Chart</h3>
        <ChartContainer>
          <div style={{ textAlign: 'center', color: '#8ca6a6' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📈</div>
            <p>Interactive charts coming soon!</p>
            <p>Track your daily mood, triggers, and victories</p>
          </div>
        </ChartContainer>
      </ProgressCard>

      <ProgressCard>
        <h3>Milestones</h3>
        <MilestoneGrid>
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} completed={currentStreak >= milestone.days}>
              <MilestoneTitle>
                {milestone.completed ? '✅' : '⏳'} {milestone.days} Day{milestone.days !== 1 ? 's' : ''}
              </MilestoneTitle>
              <MilestoneDescription>{milestone.description}</MilestoneDescription>
            </MilestoneCard>
          ))}
        </MilestoneGrid>
      </ProgressCard>
    </PageContainer>
  );
}

export default ProgressPage;