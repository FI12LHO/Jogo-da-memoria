import { FastifyInstance } from 'fastify';
import gameController from '../controllers/gameController';
import { Authenticate } from '../plugin/authenticate';

/**
 * Funcao responsavel por exportar as rotas dos jogos
 *
 * @param fastify 
 */
export async function GameRoutes(fastify:FastifyInstance) {
    fastify.post("/games", { onRequest: [ Authenticate ] }, gameController.create);
    fastify.get("/games", { onRequest: [ Authenticate ] }, gameController.index);
    fastify.get("/games/show", { onRequest: [ Authenticate ] }, gameController.show);
}