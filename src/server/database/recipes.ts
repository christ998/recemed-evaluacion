import { IPrescriptionResponse } from '../types/apiResponses/prescriptions/IPrescriptionResponse';
import { ERecipes } from '../urls/ERecipes';

export async function getRecipesFromDatabase(
  page: number,
  token: string,
): Promise<IPrescriptionResponse> {
  const response = await fetch(`${ERecipes.PRESCRIPTIONS}?page=${page}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const data: IPrescriptionResponse = await response.json();
  return data;
}
