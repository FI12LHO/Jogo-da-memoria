import { FastifyRequest, FastifyReply } from 'fastify';

export = {
    index(req:FastifyRequest, res:FastifyReply) {
        return res.status(200).send({ user: 'ME' })
    },
}