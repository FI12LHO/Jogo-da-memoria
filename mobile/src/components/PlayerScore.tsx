import { Center, HStack, Text } from "native-base";
import { Image } from "react-native";

export interface PlayerScoreProps {
    id: string,
    name: string,
    urlAvatar: string,
    score: number,
    games: number,
}

interface Props {
    data: PlayerScoreProps
}

export function PlayerScore({data}:Props) {
    let firstName = data.name.split(" ")[0];
    let lastName = data.name.split(" ")[data.name.split(" ").length - 1];
    const shortName = `${firstName} ${lastName}`;

    return (
        <HStack w="full" my={2} alignItems="center" justifyContent="center">
            <HStack flex={1} borderRightWidth={2} borderRightColor="white" 
                alignItems="center" justifyContent="center">
                <Center w={52} h={52} mr={4} p={1} rounded="full" background="white">
                    <Image style={{width: "100%", height: "100%", borderRadius: 50}}
                        source={{uri: "https://avatars.githubusercontent.com/u/40048345?v=4"}} />
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