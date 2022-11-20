import { HStack, Text, VStack } from "native-base";

interface Props {
    score: number,
    colorsCount: number,
    countColorsChosen: number,
    screenColor: string,
}

export function GameInfo({ score, colorsCount, countColorsChosen, screenColor }:Props) {
    return(
        <VStack 
            alignItems="flex-start" width="full" 
            padding={5} borderColor="gray.200" 
            borderWidth={1} bgColor="gray.300"
            opacity={screenColor == "slate.900" ? 1 : 0.5 }
            rounded="md"
        >
            <HStack width="full" my={2} alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="md" color="muted.900">Acertos:</Text>
                <Text fontSize="md" fontWeight="bold" color="green.300">{ score < 0 ? 0 : score }</Text>
            </HStack>
            <HStack width="full" my={2} alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="md" color="muted.900">Quantidade de cores:</Text>
                <Text fontSize="md" fontWeight="bold" color="green.300">{ colorsCount }</Text>
            </HStack>
            <HStack width="full" my={2} alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="md" color="muted.900">Cores selecionadas:</Text>
                <Text fontSize="md" fontWeight="bold" color="green.300">{ countColorsChosen }</Text>
            </HStack>
        </VStack>
    )
}
