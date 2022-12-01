import { useNavigation } from "@react-navigation/native";
import { Box, FlatList, Text, VStack } from "native-base";
import { useState } from "react";
import { Header } from "../components/Header";
import { PlayerScore, PlayerScoreProps } from "../components/PlayerScore";
import { UserScore } from "../components/UserScore";
import { Api } from "../service/api";

export function Score() {
    const navigation = useNavigation();
    const [scores, setScores] = useState<PlayerScoreProps[]>();
    const [userScore, setuserScore] = useState<UserScore>({games: 0, score: 0});

    async function getScores() {
        await Api.get("/games").then(res => setScores(res.data));
    }

    async function getUserScore() {
        await Api.get("/games/show").then(res => setuserScore(res.data));
    }

    useState(() => {
        getScores();
        getUserScore();
    });

    return(
        <VStack flex={1} alignItems="center" bg="slate.900">
            <Box px={1}>
                <Header showButtonBack title="Pontuações" />
            </Box>
            <UserScore score={userScore.score} games={userScore.games} />
            <Text my={4} color="white" fontSize={16} fontWeight="bold">Outros jogadores</Text>
            <FlatList
                flex={1} px={2}
                width="full"
                data={scores}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PlayerScore data={item} />} />
        </VStack>
    )
}