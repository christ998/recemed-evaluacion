import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { navigate } from 'vike/client/router';
import { $patient } from '../../store/patient';
import { ILoginResponse } from '../../server/types/apiResponses/login/ILogin';
import { $user } from '../../store/user';

export { Page };

const Page = () => {
  const patientFields = useStore($patient);
  const [loginError, setLoginError] = useState(false);

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    $patient.set({ ...patientFields, password: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patientFields),
      });
      const responseParsed: ILoginResponse = await response.json();
      if (responseParsed.data) {
        $user.set(responseParsed.data);
        navigate('/dashboard');
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
              {loginError && <p className="text-red-500 text-sm mt-1">RUT o contraseña inválido</p>}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                onChange={handleSetPassword}
              />
            </div>
            <div className="flex items-center">
              <button
                className="bg-rm-blue-100 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
