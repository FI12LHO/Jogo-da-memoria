import { Button, HStack, Text, useToast, VStack } from "native-base";
import { useState } from "react";
import { ColorBlock } from "../components/ColorBlock";
import { GameInfo } from "../components/GameInfo";

export function Play() {
    const [screenColor, setScreenColor] = useState<"slate.900" | "red.400" | "green.400">("slate.900");
    const [sequence, setSequence] = useState<number[]>([]);
    const [userSequence, setUserSequence] = useState<number[]>([]);
    const [countColorsChosen, setCountColorsChosen] = useState<number>(0);
    const [choice, setChoice] = useState<number>();
    const [isValidated, setIsValidated] = useState<boolean>(true);

    const toast = useToast();

    function start() {
        if (!isValidated) {
            toast.show({
                title: "Repita a sequencia informada!",
                placement: "bottom",
            });

            return
        }

        setUserSequence([]);
        setIsValidated(false);

        // Gerando numero aleatorio entre 1 e 6
        let random = Math.floor(Math.random() * 6) + 1;

        // Criando lista temporaria
        let list = sequence;
        list.push(random)

        // Armazenando valor da lista em um estado
        setSequence(list);

        loop();
    }

    function loop() {
        let i = 0;

        let loopId = setInterval(() => {
            setChoice(sequence[i]);
            setTimeout(() => setChoice(0), 1000);
        
            if (sequence.length - 1 == i) {
                clearInterval(loopId);
            }

            i++;
        }, 1500);
    }

    function handlePressedBlock(id:number) {
        if (isValidated) {
            return
        }

        let list = userSequence;
        list.push(id);
        setUserSequence([]);
        setCountColorsChosen(0);
        setUserSequence(list);
        setCountColorsChosen(countColorsChosen + 1);
        return
    }

    function validateSequence() {
        if (isValidated) {
            toast.show({
                title: "Pressione COMEÇAR para iniciar o jogo!",
                placement: "bottom",
            });

            return
        }

        if (useState.length == 0 ) {
            toast.show({
                title: "Repita a sequencia informada!",
                placement: "bottom",
            });

            return
        }

        setIsValidated(true);

        if (sequence.length != userSequence.length) {
            setSequence([]);
            setUserSequence([]);
            setCountColorsChosen(0);

            setScreenColor("red.400");

            setTimeout(() => setScreenColor("slate.900"), 5000);

            toast.show({
                title: "Infelizmente você errou a sequencia, o jogo será reiniciado!",
                placement: "bottom",
                bgColor: "red.500",
            });

            return
        }

        if (sequence.length == 0) {
            toast.show({
                title: "Pressione COMEÇAR para iniciar o jogo!",
                placement: "bottom",
            });

            return
        }

        let fail = false;

        sequence.map((value, index) => {
            if (value != userSequence[index]) {
                fail = true;
            }
        });

        if (fail) {
            setUserSequence([]);
            setSequence([]);
            setCountColorsChosen(0);

            setScreenColor("red.400");

            setTimeout(() => setScreenColor("slate.900"), 5000);
            
            toast.show({
                title: "Infelizmente você errou a sequencia, o jogo será reiniciado!",
                placement: "bottom",
                bgColor: "red.500",
            });

            return
        }

        setUserSequence([]);
        setCountColorsChosen(0);

        setScreenColor("green.400");

        setTimeout(() => setScreenColor("slate.900"), 5000);

        toast.show({
            title: "Parabens você acertou a sequencia!",
            placement: "bottom",
            bgColor: "green.500",
        });

        return
    }

    return (
        <VStack height="full" alignItems="center" pt={10} padding={5} backgroundColor={screenColor}>
            <GameInfo 
                score={sequence.length - 1} 
                colorsCount={sequence.length} 
                countColorsChosen={countColorsChosen} 
                screenColor={screenColor}
            />
            <VStack width="full" mt={10} alignItems="center" justifyContent="center">
                <HStack my={4} width="full" alignItems="center" justifyContent="space-between">
                    <ColorBlock
                        id={1}
                        color="red.900" 
                        pressedColor="red.500" 
                        choice={choice}
                        onPress={() => handlePressedBlock(1)} />
                    <ColorBlock
                        id={2}
                        color="green.900" 
                        pressedColor="green.500" 
                        choice={choice}
                        onPress={() => handlePressedBlock(2)} />
                    <ColorBlock
                        id={3}
                        color="blue.900" 
                        pressedColor="blue.500" 
                        choice={choice}
                        onPress={() => handlePressedBlock(3)} />
                </HStack>
                <HStack my={4} width="full" alignItems="center" justifyContent="space-between">
                    <ColorBlock
                        id={4}
                        color="purple.900" 
                        pressedColor="purple.500" 
                        choice={choice}
                        onPress={() => handlePressedBlock(4)} />
                    <ColorBlock
                        id={5}
                        color="yellow.900" 
                        pressedColor="yellow.500" 
                        choice={choice}
                        onPress={() => handlePressedBlock(5)} />
                    <ColorBlock
                        id={6}
                        color="black.900" 
                        pressedColor="black.500" 
                        choice={choice}
                        onPress={() => handlePressedBlock(6)} />
                </HStack>
            </VStack>
            <VStack width="full" mt={20} alignItems="center" justifyContent="space-between">
                <Button 
                    bgColor="muted.900" width="full" my={4}
                    alignItems="center" justifyContent="center"
                    onPress={start}
                    _pressed={{
                        backgroundColor: "muted.800"
                    }}
                >
                    <Text fontWeight="bold" fontSize="lg" color="white">Começar</Text>
                </Button> 
                <Button 
                    bgColor="purple.900" width="full" my={4}
                    alignItems="center" justifyContent="center"
                    onPress={validateSequence}
                    _pressed={{
                        backgroundColor: "purple.800"
                    }}
                >
                    <Text fontWeight="bold" fontSize="lg" color="white">Corrigir</Text>
                </Button>
            </VStack>
        </VStack>
    )
}