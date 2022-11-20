import Fastify from "fastify"
import Cors from '@fastify/cors';
import Jwt from '@fastify/jwt';

const fastify = Fastify({ logger: true });
fastify.register(Cors, { origin: true });
fastify.register(Jwt, { secret: 'nlwcopa' });

export const server = fastify;