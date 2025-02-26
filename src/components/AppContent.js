import { useAuth } from './AuthContext';
import Login from './components/Login';
import Orders from './components/Orders';
function AppContent() {
    const { user } = useAuth();
  
    return (
      <div>
        {user ? <Orders /> : <Login />}
      </div>
    );
  }
  export default AppContent()
