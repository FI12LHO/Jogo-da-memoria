import { userRoutes } from './routes/userRoute';
import { server as Fastify } from './server';

async function app() {
    await Fastify.register(userRoutes);
    await Fastify.listen({port: 3333, host: '0.0.0.0'});
}

app();