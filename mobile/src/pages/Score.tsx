import { useNavigation } from "@react-navigation/native";
import { Box, FlatList, Text, VStack } from "native-base";
import { useState } from "react";
import { Header } from "../components/Header";
import { PlayerScore, PlayerScoreProps } from "../components/PlayerScore";
import { UserScore } from "../components/UserScore";

export function Score() {
    const navigation = useNavigation();
    const [scores, setScores] = useState<PlayerScoreProps[]>([
        {
            name: 'Marlom de oliveira Marques',
            games: 3,
            score: 10,
            id: "12356789",
            urlAvatar: "https://github.com/FI12LHO.png"
        }
    ]);
    return(
        <VStack flex={1} alignItems="center" bg="slate.900">
            <Box px={1}>
                <Header showButtonBack title="Pontuações" />
            </Box>
            <UserScore score={10} games={3} />
            <Text my={4} color="white" fontSize={16} fontWeight="bold">Outros jogadores</Text>
            <FlatList
                width="full"
                data={scores}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PlayerScore data={item} />} />
        </VStack>
    )
}