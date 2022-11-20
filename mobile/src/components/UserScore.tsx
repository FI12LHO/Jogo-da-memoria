import { Box, HStack, Text, VStack } from "native-base";

interface Props {
    score: number,
    games: number
}

export function UserScore({score, games}:Props) {
    return (
        <VStack mt={5} px={6} w="full" alignItems="center">
            <Text color="white" fontSize={16} fontWeight="bold">Suas informações</Text>
            <HStack w="full" py={4}
                alignItems="center" justifyContent="space-between" 
                borderBottomWidth={1} borderBottomColor="white">
                <VStack flex={1} alignItems="center" justifyContent="center">
                    <Text fontSize={30} fontWeight="bold" color="white">{score}</Text>
                    <Text fontSize={16} color="white">acertos</Text>
                </VStack>
                <Box h="full" w={1/2} background="white"></Box>
                <VStack flex={1} alignItems="center" justifyContent="center">
                    <Text fontSize={30} fontWeight="bold" color="white">{games}</Text>
                    <Text fontSize={16} color="white">tentativas</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}