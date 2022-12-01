import { FastifyInstance } from 'fastify';
import userController from '../controllers/userController';
import { Authenticate } from '../plugin/authenticate';

/**
 * Funcao responsavel por exportar as rotas de autentificacao
 *
 * @param fastify 
 */
export async function UserRoutes(fastify:FastifyInstance) {
    fastify.get("/me", { onRequest: [ Authenticate ] }, userController.me);
}