
import React, { memo } from 'react';
import { useAuth } from './AuthContext';
import RegisterAmin from './registerAdmin';


const AccionAdmin = memo(() => {

    const { user, users, registerAdmin,register, logout } = useAuth();

    return (
        <>
            {register ? (<RegisterAmin />
            ) : (
                <div className="lg:h-[460px] md:h-[300px] max-md:mt-8">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-lg text-center">
                        <h2 className="text-2xl font-semibold">¡Bienvenido,  {user.name}!</h2>
                        <h4>Tu rol es: {user.role}</h4>


                        <p className="text-gray-700 mt-2">Tu correo electrónico es: {user.email}</p>

                    </div>
                    <div className="font-sans overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100 whitespace-nowrap">
                                <tr>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-4 text-sm text-gray-800">{user.name}</td>
                                        <td className="px-4 py-4 text-sm text-gray-800">{user.email}</td>
                                        <td className="px-4 py-4 text-sm text-gray-800">{user.role}</td> {/* Nueva columna para el rol */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='display grid'>

                        <button
                            onClick={registerAdmin}
                            className="mt-4 py-2 px-4 bg-green-400 text-white rounded-lg hover:bg-red-600 "
                        >
                            Registrar Usuario
                        </button>
                        <button
                            onClick={logout}
                            className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 "
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            )}
        </>

    );
});









export default AccionAdmin;