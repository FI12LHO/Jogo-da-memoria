import { Center, HStack, Stack, Text } from "native-base";
import { Image } from "react-native";

export interface PlayerScoreProps {
    score: number,
    id: string,
    owner: string,
    games: number,
    avatarUrl: string,
}

interface Props {
    data: PlayerScoreProps
}

export function PlayerScore({ data }:Props) {
    let firstName = data.owner.split(" ")[0];
    let lastName = data.owner.split(" ")[data.owner.split(" ").length - 1];
    const shortName = `${firstName} ${lastName}`;

    if (data.score == 0 || data.games == 0) {
        return <Stack></Stack>
    }

    return (
        <HStack w="full" my={2} alignItems="center" justifyContent="center">
            <HStack flex={1} borderRightWidth={2} borderRightColor="white" 
                alignItems="center" justifyContent="center">
                <Center w={52} h={52} mr={4} p={1} rounded="full" background="white">
                    <Image style={{width: "100%", height: "100%", borderRadius: 50}}
                        source={{uri: data.avatarUrl}} />
                </Center>
                <Text 
                    color="white" fontSize={16} maxWidth="1/2"
                    fontWeight="bold" textBreakStrategy="simple"
                >{shortName}</Text>
            </HStack>
            <HStack minWidth={90} h="full"
                borderRightWidth={1} borderRightColor="white" 
                alignItems="center" justifyContent="center">
                <Text color="white" fontSize={16} fontWeight="bold">{data.score}</Text>
            </HStack>
            <HStack minWidth={90} h="full"
                alignItems="center" justifyContent="center">
                <Text color="white" fontSize={16} fontWeight="bold">{data.games}</Text>
            </HStack>
        </HStack>
    )
}