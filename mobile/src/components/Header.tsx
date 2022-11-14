import { HStack, Image, Text, Box, IconButton, Icon } from "native-base";
import { CaretLeft } from "phosphor-react-native";

import Logo from "../assets/logo.png";

interface Props{
    showButtonBack?: boolean,
    onBack?: () => void,
    showLogo?: boolean,
    showTitle?: boolean,
    title?: string,
}

export function Header({ showButtonBack = false, showLogo = false, showTitle = false, title = "", onBack }:Props) {
    const EmptyBoxSpace = () => (<Box w={6} h={6} />);

    return (
        <HStack width="full" alignItems="center" justifyContent="space-between" mt={10}>
            { 
                showButtonBack ? 
                <IconButton icon={<Icon as={CaretLeft} />} /> : 
                <EmptyBoxSpace /> 
            }
            { 
                showTitle ? 
                <Text color="muted.900" textAlign="center" fontSize="lg" fontWeight="bold" flex={1}>{ title }</Text> : 
                <EmptyBoxSpace />
            }
            
            <EmptyBoxSpace />
        </HStack>
    )
}