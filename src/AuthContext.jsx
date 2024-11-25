import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [register, setRegister] = useState(false);
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState(null); // Estado para el usuario autenticado

  useEffect(() => {
    const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const toggleForm = () => setIsRegister(!isRegister);
  const registerAdmin = () => setRegister (!register);
  const loginUser = (username, password) => {
    const foundUser = users.find((u) => u.name === username && u.password === password);
    if (foundUser) {
      setLoginError('');
      setUser(foundUser); // Almacena el usuario autenticado
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ isRegister, toggleForm,register,registerAdmin, loginUser, users, setUsers, loginError, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
