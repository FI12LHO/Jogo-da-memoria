import { NavigationContainer } from '@react-navigation/native';
import { Box } from 'native-base';
import { userAuth } from '../hooks/userAuth';
import { Sigin } from '../pages/Sigin';
import { AppRoutes } from './app.routes';


export function Routes() {
    const { user } = userAuth();

    return (
        <Box flex={1} bgColor="slate.900">
            <NavigationContainer>
                { user.name ? <AppRoutes /> : <Sigin /> }
            </NavigationContainer>
        </Box>
    )
}