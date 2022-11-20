import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "../pages/Main";
import { Play } from "../pages/Play";
import { Score } from "../pages/Score";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ 
            headerShown: false,
        }}>
            <Screen name="Main" component={Main} />
            <Screen name="Play" component={Play} />
            <Screen name="Score" component={Score} />
        </Navigator>
    )
    
}