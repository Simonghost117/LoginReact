import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // Usa el contexto de autenticación para acceder a `toggleForm`, `users`, y `loginUser`
import Register from './Register';
const Login = () => {
  const { isRegister, toggleForm, loginError, loginUser,  } = useAuth(); // Recupera los métodos y estados del contexto
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginUser(username, password); // Llama a la función de login desde el contexto
  };

  return (
    <>
      {isRegister ? (
        <Register /> // Renderiza el componente de registro si isRegister es true
      ) : (
        <div className="font-[sans-serif]">
          <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
              
              <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                {/* Formulario de inicio de sesión */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-8">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                      Sign in to your account and explore a world of possibilities. Your journey begins here.
                    </p>
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">User name</label>
                    <input
                      name="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter user name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                    <input
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                    />
                  </div>
                  {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
                  
                  <div className="!mt-8">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                    >
                      Log in
                    </button>
                  </div>
                  <p className="text-sm !mt-8 text-center text-gray-800">
                    {isRegister ? "Already have an account?" : "Don't have an account?"}
                    <span onClick={toggleForm} className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer">
                      {isRegister ? "Sign in here" : "Register here"}
                    </span>
                  </p>
                </form>
              </div>

           
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
