import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { prisma } from './../lib/prismaConnection';
import { server as Fastify } from '../server';

/**
 * Controller com todos os metodos de autentificao
 */
export = {
    /**
     * Metodo responsavel por realizar o sigin do usuario
     * Cadastrando ou buscando os dados do mesmo no bd
     *
     * @param req {Request} Requisicao da rota
     * @param res {Response} Resposta da rota
     * @returns {JSON}
     */
    async sigin(req:FastifyRequest, res:FastifyReply) {
        /**
         * Validando dados obtidos da requisicao
         */
        const requestBody = z.object({
            access_token: z.string(),
        });

        const { access_token } = requestBody.parse(req.body);

        if (access_token == null) {
            return res.status(500).send({
                origin: 'Server',
                error: 'Data not found.'
            })
        }

        /**
         * Requisitando dados a API do Google
         */
        const userData = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`)
            .then(res => res.json());

        /**
         * Validando dados obtidos da requisicao
         */
        const userInfoShema = z.object({
            id: z.string(),
            email: z.string().email(),
            name: z.string(),
            picture: z.string().url(),
        });
    
        const userInfo = userInfoShema.parse(userData);

        /**
         * Validando se o usuario já realizou cadastro anteriormente
         * Caso possua cadastro sera obtido do bd os dados do mesmo
         * Caso nao possua cadastro, sera gerado um novo registro no bd
         */
        let user = await prisma.user.findUnique({
            where: {
                googleId: userInfo.id
            }
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name: userInfo.name,
                    email: userInfo.email,
                    googleId: userInfo.id,
                    avatarUrl: userInfo.picture
                }
            });
        }

        /**
         * Criando token de acesso utilizando nome e url do avatar do usuario
         */
        const token = Fastify.jwt.sign({
            name: user.name,
            avatarUrl: user.avatarUrl
        },
        {
            sub: user.id,
            expiresIn: '7 days',
        });

        /**
         * Retornando token de acesso
         */
        return res.status(200).send({ token })
    },
}