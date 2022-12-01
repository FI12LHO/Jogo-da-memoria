import { PrismaClient } from '@prisma/client'

/**
 * Constate com uma instancia do prisma client
 * Junto a constate e exportado configuracoes personalizadas
 */
export const prisma = new PrismaClient({
    log: ['query']
})