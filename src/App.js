import React from 'react';
import Login from './components/Login';
import Chart from './components/Chart';
import { AuthProvider, useAuth } from './components/AuthContext';

function AppContent() {
  const { user } = useAuth();

  return (
    <div>
      {user ? <Chart /> : <Login />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
