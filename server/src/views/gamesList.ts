export interface GameProps {
    game: [{
            score: number,
            id: string
    }],
    name: string,
    avatarUrl: string,
    _count: {
        game: number
    }
}

interface Props extends Array<GameProps> {
    data: GameProps[]
}

export function GamesView(data:Props) {
    let list = <any>[];

    data.map((item:GameProps) => {
        list.push({
            score: item.game[0]?.score != null ? item.game[0].score : 0,
            id: item.game[0]?.id != null ? item.game[0].id : item.name,
            owner: item.name,
            games: item._count.game,
            avatarUrl: item.avatarUrl,
        });
    })
    
    return list;
}