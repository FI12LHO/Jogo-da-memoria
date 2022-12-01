import { AuthRoutes } from './routes/authRoute';
import { UserRoutes } from './routes/userRoute';
import { GameRoutes } from './routes/gameRoute';
import { server as Fastify } from './server';

async function app() {
    await Fastify.register(AuthRoutes);
    await Fastify.register(UserRoutes);
    await Fastify.register(GameRoutes);
    await Fastify.listen({port: 3333, host: '0.0.0.0'});
}

app();