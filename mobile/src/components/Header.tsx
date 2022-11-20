import { useNavigation } from "@react-navigation/native";
import { HStack, Text, Box, IconButton, Icon } from "native-base";
import { CaretLeft } from "phosphor-react-native";

interface Props{
    showButtonBack?: boolean,
    title?: string,
}

export function Header({ showButtonBack = false, title = "" }:Props) {
    const EmptyBoxSpace = () => (<Box w={6} h={6} />);
    const navigation = useNavigation();

    return (
        <HStack width="full" alignItems="center" justifyContent="space-between" mt={10}>
            { 
                showButtonBack ? 
                <IconButton 
                    onPress={() => navigation.goBack()}
                    icon={ <Icon as={<CaretLeft color="white" /> } /> }
                /> : 
                <EmptyBoxSpace /> 
            }
            <Text 
                color="white" 
                textAlign="center" 
                fontSize="3xl" 
                fontWeight="bold" flex={1}
            >{ title }</Text>
            <EmptyBoxSpace /> 
        </HStack>
    )
}