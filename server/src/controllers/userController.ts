import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * Controller com todos os metodos do usuario
 */
export = {
    /**
     * Metodo responsavel por devolver os dados do usuario
     *
     * @param req {Request} Requisicao da rota
     * @param res {Response} Resposta da rota
     * @returns {JSON}
     */
    async me(req:FastifyRequest, res:FastifyReply) {
        return res.status(200).send({ user:req.user })
    },
}