import { FastifyInstance } from 'fastify';
import authController from '../controllers/authController';

/**
 * Funcao responsavel por exportar as rotas de autentificacao
 *
 * @param fastify 
 */
export async function AuthRoutes(fastify:FastifyInstance) {
    fastify.post("/sigin", authController.sigin);
}