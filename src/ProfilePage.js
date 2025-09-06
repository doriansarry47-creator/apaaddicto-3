import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: ${props => props.theme.spacing * 3}px ${props => props.theme.spacing}px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing * 2}px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  margin: 0 auto ${props => props.theme.spacing * 2}px;
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing}px;
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
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.muted};
  font-size: 0.9rem;
`;

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2024-01-15',
    currentStreak: 15,
    longestStreak: 45,
    totalDays: 120
  });

  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    // Here you would typically save to a backend
    console.log('Profile saved:', profile);
  };

  return (
    <PageContainer>
      <h1>My Profile</h1>
      
      <ProfileCard>
        <Avatar>
          {profile.name.split(' ').map(n => n[0]).join('')}
        </Avatar>
        
        {editing ? (
          <>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
              />
            </FormGroup>
            <Button onClick={handleSave}>Save Changes</Button>
          </>
        ) : (
          <>
            <h2 style={{textAlign: 'center', marginBottom: '10px'}}>{profile.name}</h2>
            <p style={{textAlign: 'center', color: '#8ca6a6', marginBottom: '20px'}}>{profile.email}</p>
            <p style={{textAlign: 'center', marginBottom: '20px'}}>Member since: {new Date(profile.joinDate).toLocaleDateString()}</p>
            <Button onClick={() => setEditing(true)}>Edit Profile</Button>
          </>
        )}
      </ProfileCard>

      <StatsGrid>
        <StatCard>
          <StatValue>{profile.currentStreak}</StatValue>
          <StatLabel>Current Streak (days)</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{profile.longestStreak}</StatValue>
          <StatLabel>Longest Streak (days)</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{profile.totalDays}</StatValue>
          <StatLabel>Total Recovery Days</StatLabel>
        </StatCard>
      </StatsGrid>
    </PageContainer>
  );
}

export default ProfilePage;