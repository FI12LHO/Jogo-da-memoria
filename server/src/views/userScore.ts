interface Props {
    owner: {
        _count: {
            game: number
        }
    }, 
    score: number
}

export function UserScore(data:Props) {
    return ({
        games: data.owner._count.game,
        score: data.score
    })
}