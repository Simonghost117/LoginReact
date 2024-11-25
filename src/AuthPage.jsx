import React from 'react';
import { useAuth } from './AuthContext';
import Login from './Login';
import Register from './Register';
import AuthUserMemoProfile from './AuthUserMemoProfile';

const AuthPage = () => {
  const { isRegister, user } = useAuth();

  if (user) {
    return <AuthUserMemoProfile />; // Muestra el perfil si el usuario está autenticado
  }

  return (
    <div>
      {isRegister ? <Register /> : <Login />}
    </div>
  );
};

export default AuthPage;
