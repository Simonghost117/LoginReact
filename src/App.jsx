import React from 'react'; // Importa React para poder definir el componente App
import AuthPage from './AuthPage'; // Importa el componente AuthPage, que probablemente muestra los formularios de autenticación
import { AuthProvider } from './AuthContext'; 
// Importa el AuthProvider, que es el contexto de autenticación para proporcionar datos y funciones de autenticación a toda la aplicación

const App = () => {
  // Componente principal de la aplicación
  return (
    <AuthProvider>
      {/* Envuelve AuthPage dentro del AuthProvider */}
      {/* Esto permite que AuthPage y cualquier componente dentro de él accedan al contexto de autenticación */}
      <AuthPage />
    </AuthProvider>
  );
};

export default App; // Exporta App como el componente principal para su uso en index.js
