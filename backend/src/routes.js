import { Router } from 'express';
import PlanController from '../app/controllers/PlanController';

const routes = new Router();

routes.get('/crud', PlanController.index);
routes.get('/crud/:id', PlanController.index);
routes.post('/crud', PlanController.store);
routes.put('/crud', PlanController.update);
routes.delete('/crud/:id', PlanController.delete);

export default routes;
