import React, { useState } from 'react'; // Importa React y useState para el estado local
import { useAuth } from './AuthContext'; // Importa el hook personalizado useAuth para acceder al contexto de autenticación

const Register = () => {
  const { toggleForm, users, setUsers } = useAuth(); 
  // Extrae las funciones toggleForm, users y setUsers del contexto.
  // toggleForm alterna entre los formularios de registro e inicio de sesión.
  // users contiene los usuarios registrados.
  // setUsers actualiza la lista de usuarios.

  const [name, setName] = useState(''); // Estado local para almacenar el nombre de usuario
  const [email, setEmail] = useState(''); // Estado local para almacenar el correo electrónico
  const [password, setPassword] = useState(''); // Estado local para almacenar la contraseña
  const [registerError, setRegisterError] = useState(''); // Estado local para almacenar errores de registro
  const [role, setRole] = useState('admin');
  //cambiar si necesita admin  
  const handleRegister = () => {
    // Verifica si el nombre de usuario o el correo electrónico ya existen en la lista de usuarios
    const userExists = users.some((user) => user.name === name || user.email === email);

    if (userExists) {
      setRegisterError('Username or email already exists'); // Muestra un mensaje de error si el usuario o correo ya existen
    } else {
      const newUser = { name, email, password,role }; // Crea un objeto con los datos del nuevo usuario
      const updatedUsers = [...users, newUser]; // Crea una lista actualizada de usuarios que incluye el nuevo usuario
      setUsers(updatedUsers); // Actualiza la lista de usuarios en el contexto

      // Guarda la lista actualizada de usuarios en sessionStorage
      sessionStorage.setItem('users', JSON.stringify(updatedUsers));
      setRegisterError(''); // Limpia cualquier error previo
      alert('Registration successful!'); // Muestra una alerta de éxito
      toggleForm(); // Cambia al formulario de inicio de sesión
    }
  };

  return (
    <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        {/* Contenedor principal dividido en tres columnas en dispositivos medianos (md), con sombra y bordes redondeados */}
        
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          {/* Panel lateral izquierdo con un fondo degradado y contenido informativo sobre el registro */}
          
          <div>
            <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
            {/* Información de bienvenida para el usuario */}
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
            {/* Información adicional sobre la seguridad del registro */}
          </div>
        </div>
        
        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16" onSubmit={(e) => e.preventDefault()}>
          {/* Formulario de registro que ocupa las otras dos columnas en pantallas medianas */}

          <div className="mb-8">
            <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
            {/* Título del formulario */}
          </div>
          
          <div>
            <label className="text-gray-800 text-sm mb-2 block">User name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Actualiza el estado `name` con el valor ingresado
              required
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
              placeholder="Enter user name"
            />
            {/* Campo para ingresar el nombre de usuario */}
          </div>
          
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado `email` con el valor ingresado
              required
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
              placeholder="Enter email address"
            />
            {/* Campo para ingresar el correo electrónico */}
          </div>
          
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado `password` con el valor ingresado
              required
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
              placeholder="Enter password"
            />
            {/* Campo para ingresar la contraseña */}
          </div>

          {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
          {/* Muestra un mensaje de error si `registerError` contiene un mensaje */}

     

          <div className="!mt-8">
            <button
              type="button"
              onClick={handleRegister} // Ejecuta la función handleRegister al hacer clic en el botón
              className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
            >
              Register
            </button>
            {/* Botón para registrar al usuario */}
          </div>

          <p className="text-sm !mt-8 text-center text-gray-800">
            Already have an account?
            <span onClick={toggleForm} className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer">
              Sign in here
            </span>
            {/* Texto de enlace para alternar al formulario de inicio de sesión */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register; // Exporta el componente para su uso en otros archivos
