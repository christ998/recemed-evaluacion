import { Express, Request, Response } from 'express';
import { ELogin } from './urls/ELogin';
import { getRecipesFromDatabase } from './database/recipes';

export function apiRoutes(app: Express) {
  app.post('/api/login', async (req: Request, res: Response) => {
    const patientFields = req.body;
    const response = await fetch(ELogin.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: patientFields }),
    });
    const data = await response.json();
    if (data) {
      res.json(data);
    } else {
      res.status(401).json({ message: 'RUT inválido' });
    }
  });

  app.get('/api/recipes', async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const token = req.headers.authorization as string;
    const recipes = await getRecipesFromDatabase(page, token);
    if (!recipes) {
      res.status(500).json({ message: 'Error al obtener recetas' });
    } else {
      res.status(200).json(recipes.data);
    }
  });
}
