import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const RegisterAdmin = () => {
    const { registerAdmin, users, setUsers } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [role, setRole] = useState('admin');
    // cambiar para admin
    const handleRegister = () => {

        const userExists = users.some((user) => user.name === name || user.email === email);

        if (userExists) {
            setRegisterError('Username or email already exists');
        } else {
            const newUser = { name, email, password, role };
            const updatedUsers = [...users, newUser];
            setUsers(updatedUsers);


            sessionStorage.setItem('users', JSON.stringify(updatedUsers));
            setRegisterError('');
            alert('Registration successful!');
            registerAdmin();
        }
    };

    return (
        <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
            <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">

                <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">


                    <div>
                        <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
                        <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>

                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                        <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
                    </div>
                </div>
                <form className="md:col-span-2 w-full py-6 px-6 sm:px-16" onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-8">
                        <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">User name</label>
                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                            placeholder="Enter user name"
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                            placeholder="Enter email address"
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
                    {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="!mt-6">
                        <button
                            type="button"
                            onClick={handleRegister}
                            className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                        >
                            Register
                        </button>
                        <button
                            onClick={registerAdmin}
                            className="!mt-1 bg-green-400 w-full shadow-xl py-3 px-3 text-sm tracking-wide  text-white rounded-lg hover:bg-red-600 "
                        >
                            Regresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterAdmin; 