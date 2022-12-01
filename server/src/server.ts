import Fastify from "fastify"
import Cors from '@fastify/cors';
import Jwt from '@fastify/jwt';

const fastify = Fastify({ logger: true });
fastify.register(Cors, { origin: true });
fastify.register(Jwt, { secret: 'jogo-da-memoria' });

/**
 * Constate com uma instacia do Fastify
 * Junto a constante e exportado configuracoes personalizadas
 */
export const server = fastify;