import React, { memo } from 'react';
import { useAuth } from './AuthContext';
import AccionAdmin from './accionAdmin';

const AuthUserMemoProfile = memo(() => {
  const { user, logout } = useAuth();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      {user ? (
        user.role === 'admin' ? (
          <AccionAdmin />
        ) : <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-lg text-center">
          <h2 className="text-2xl font-semibold">¡Bienvenido,  {user.name}!</h2>
          <h4>Tu rol es: {user.role}</h4>


          <p className="text-gray-700 mt-2">Tu correo electrónico es: {user.email}</p>
          <button
            onClick={logout}
            className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>

      ) : (
        <p className="text-gray-500">No estás autenticado. Por favor, inicia sesión.</p>
      )}
    </div>
  );
});

export default AuthUserMemoProfile;
