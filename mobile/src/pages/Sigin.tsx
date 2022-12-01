import { Text, Center, Button, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons"
import { userAuth } from "../hooks/userAuth";

export function Sigin() {
    const { signIn, user, isUserLoading } = userAuth();

    return (
        <Center flex={1} bg="slate.900" p={7}>
            <Button 
                w="full" h={60}
                bgColor="red.800"
                leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
                onPress={signIn}
                isLoading={isUserLoading}
                _pressed={{
                    bgColor: "red.500"
                }}
                _loading={{ _spinner: { color: "white" }}}
            >
                <Text color="white">Entrar com o google</Text>
            </Button>

            <Text color="white" textAlign="center" mt={6}>
                Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}