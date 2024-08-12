import { MedicalRecord } from '../server/types/apiResponses/prescriptions/IMedicalRecord';
interface IRecipeCard {
  recipe: MedicalRecord;
}
function formatDate(dateString: string) {
  return dateString.replace(/^(\d{4})-(\d{2})-(\d{2}).*$/, '$3-$2-$1');
}
const RecipeCard = ({ recipe }: IRecipeCard) => {
  return (
    <div
      key={recipe.code}
      className={`rounded-lg shadow-md p-6 ${
        recipe.type === 'Receta Retenida' ? 'bg-pink-50' : 'bg-blue-50'
      }`}>
      <p className="text-gray-600 mb-4">Fecha de emisión {formatDate(recipe.inserted_at)}</p>
      <h2 className="text-xl font-semibold mb-2">
        Dr: {`${recipe.doctor.first_name} ${recipe.doctor.last_name}`}
      </h2>
      <p className="text-gray-600 mb-4">{recipe.doctor.speciality}</p>
      <p className="text-sm text-gray-500">Código: {recipe.code}</p>
      <button>Ver</button>
    </div>
  );
};

export default RecipeCard;
