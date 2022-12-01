import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { GameProps, GamesView } from '../views/gamesList';
import { UserScore } from '../views/userScore';
import { prisma } from './../lib/prismaConnection';

/**
 * Controller com todos os metodos dos jogos
 */
export = {
    /**
     * Metodo responsavel por bucar e retornar todos os jogos
     *
     * @param req {Request} Requisicao da rota
     * @param res {Response} Resposta da rota
     * @returns {JSON}
     */
    async index(req:FastifyRequest, res:FastifyReply) {
        const games = await prisma.user.findMany({
            where: {
                NOT: {
                    id: req.user.sub
                }
            },
            select: {
                _count: {
                    select: { game: true }
                },
                game: {
                    select: { score: true, id: true },
                    orderBy: { score: 'desc' },
                    take: 1
                },
                name: true,
                avatarUrl: true,
            }
        });

        const view = GamesView(games);

        return res.status(200).send(view);
    },

    /**
     * Metodo responsavel por bucar e retornar os jogos do usuario
     *
     * @param req {Request} Requisicao da rota
     * @param res {Response} Resposta da rota
     * @returns {JSON}
     */
    async show(req:FastifyRequest, res:FastifyReply) {
        const game = await prisma.game.findFirst({
            where: {
                userId: req.user.sub,
            },
            select: {
                owner: {
                    select: {
                        _count: { select: { game: true } }
                    }
                },
                score: true,
            },
            take: 1,
        });

        if (!game) {
            return res.status(200).send({ games: 0, score: 0 });
        }

        const view = UserScore(game);

        return res.status(200).send(view);
    },

    /**
     * Metodo responsavel por registrar os jogos do usuario
     *
     * @param req {Request} Requisicao da rota
     * @param res {Response} Resposta da rota
     * @returns {JSON}
     */
    async create(req:FastifyRequest, res:FastifyReply) {
        const requestBody = z.object({
            score: z.number()
        });

        const { score } = requestBody.parse(req.body); 

        // Buscando dados do usuario atual
        const user = await prisma.user.findUnique({
            where: { id:  req.user.sub}
        });

        if (!user) {
            return res.status(400).send({
                origin: 'Server',
                error: 'User not found or does not exist.'
            });
        }

        await prisma.game.create({
            data: {
                score,
                userId: user.id
            }
        });

        return res.status(200).send({})
    }
}