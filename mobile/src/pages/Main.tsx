import { useNavigation } from "@react-navigation/native";
import { Box, Button, Text, VStack } from "native-base";
import { Image } from "react-native";
import Logo from "../assets/logo.png";

export function Main() {
    const navigation = useNavigation();

    return(
        <VStack flex={1} alignItems="center" bg="slate.900">
            <VStack width="full" alignItems="center" justifyContent="center" mt={20} p={4}>
                <Text color="white" fontSize="3xl" fontWeight="bold">JOGO DA MEMÓRIA</Text>
                <Text mt={2} color="yellow.300" fontSize="xl" fontWeight="bold">Sequencia de cores</Text>
            </VStack>
            <VStack alignItems="center" justifyContent="center" width="full" px="8"  flex={1}>
                <Button
                    bgColor="blue.500"
                    width="full"
                    my={30}
                    _pressed={{
                        bgColor: "blue.800"
                    }}
                    onPress={() => navigation.navigate("Play")}
                >
                    <Text color="white" fontWeight="bold" fontSize="lg">Jogar</Text>
                </Button>
                <Button
                    bgColor="green.500"
                    width="full"
                    my={30}
                    _pressed={{
                        bgColor: "green.800"
                    }}
                    onPress={() => {}}
                >
                    <Text color="white" fontWeight="bold" fontSize="lg">Pontuações</Text>
                </Button>
            </VStack>
            <Box w={6} h={6} />
        </VStack>
    )
}