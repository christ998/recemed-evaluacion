import { $user } from '../../store/user';
import useFetchPrescriptions from '../../hooks/useFetchPrescriptions';
import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { Spinner } from '../../components/Spinner';
import RecipeCard from '../../components/RecipeCard';

export { Page };

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const { data, loading } = useFetchPrescriptions(page);
  const { profiles } = useStore($user);

  const toRender = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <div className="w-full p-4 bg-blue-500">
            <div>
              <p className="text-white text-right mr-20 text-2xl">{`${profiles[0].first_name} ${profiles[0].last_name}`}</p>
            </div>
          </div>
          <div className='container mx-auto'>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {data.map((recipe) => (
                <RecipeCard key={recipe.code} recipe={recipe} />
              ))}
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                disabled={page === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
                Anterior
              </button>
              <span className="text-gray-600">Página {page}</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Siguiente</button>
            </div>
          </div>
        </div>
      );
    }
  };

  return toRender();
};
