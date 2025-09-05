import React from 'react';

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your personal dashboard!</p>
      <div>
        <h2>Quick Stats</h2>
        <ul>
          <li>Total Users: 1,234</li>
          <li>Active Sessions: 56</li>
          <li>Revenue: $12,345</li>
        </ul>
      </div>
      <div>
        <h2>Recent Activity</h2>
        <p>Your latest activities will appear here.</p>
      </div>
    </div>
  );
}

export default DashboardPage;