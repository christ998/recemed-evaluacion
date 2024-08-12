import { $patient } from '../../store/patient';
import { useState } from 'react';
import { format, validate } from 'rut.js';
import { navigate } from 'vike/client/router';

export { Page };

function Page() {
  const [rut, setRut] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleRUTChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRut = format(e.target.value, { dots: false });
    setRut(newRut);
    $patient.set({ rut: newRut, password: '' });
    setIsValid(validate(newRut));
  };

  const isRutValid = () => {
    if (isValid) {
      navigate('/password');
    }
  };

  return (
    <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Rut</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="12345678-9"
                value={rut}
                onChange={handleRUTChange}
              />
            </div>
            <div className="flex items-center">
              <button
                className="bg-rm-blue-100 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={isRutValid}>
                Siguiente
              </button>
              {!isValid && rut && <p className="text-red-500 text-sm mt-1">RUT inválido</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
