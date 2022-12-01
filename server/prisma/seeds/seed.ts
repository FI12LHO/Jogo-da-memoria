import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function population() {
    const player1 = await prisma.user.create({
        data: {
            googleId: '123456789123456789123',
            name: 'Player 1',
            email: 'player1@gmail.com',
            avatarUrl: 'https://github.com/fi12lho.png'
        }
    });

    const player2 = await prisma.user.create({
        data: {
            googleId: '223456789123456789123',
            name: 'Player 2',
            email: 'player2@gmail.com',
            avatarUrl: 'https://github.com/fi12lho.png'
        }
    });

    const player3 = await prisma.user.create({
        data: {
            googleId: '323456789123456789123',
            name: 'Player 3',
            email: 'player3@gmail.com',
            avatarUrl: 'https://github.com/fi12lho.png'
        }
    });

    const player4 = await prisma.user.create({
        data: {
            googleId: '423456789123456789123',
            name: 'Player 4',
            email: 'player4@gmail.com',
            avatarUrl: 'https://github.com/fi12lho.png'
        }
    });

    const player5 = await prisma.user.create({
        data: {
            googleId: '523456789123456789123',
            name: 'Player 5',
            email: 'player5@gmail.com',
            avatarUrl: 'https://github.com/fi12lho.png'
        }
    });

    const player6 = await prisma.user.create({
        data: {
            googleId: '623456789123456789123',
            name: 'Player 6',
            email: 'player6@gmail.com',
            avatarUrl: 'https://github.com/fi12lho.png'
        }
    });

    await prisma.game.create({
        data: {
            score: 10,
            userId: player1.id
        }
    });

    await prisma.game.create({
        data: {
            score: 3,
            userId: player2.id
        }
    });

    await prisma.game.create({
        data: {
            score: 5,
            userId: player3.id
        }
    });

    await prisma.game.create({
        data: {
            score: 10,
            userId: player4.id
        }
    });

    await prisma.game.create({
        data: {
            score: 3,
            userId: player5.id
        }
    });

    await prisma.game.create({
        data: {
            score: 5,
            userId: player6.id
        }
    });
}

population()