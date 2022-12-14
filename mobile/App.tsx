import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter"
import { Loading } from "./src/components/Loading";
import { THEME } from "./src/styles/Theme";
import { Routes } from "./src/routes";
import { AuthContextProvider } from "./src/context/AuthContextProvider";

export default function App() {
  const [ fontsLoaded ] = useFonts({Inter_400Regular, Inter_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        { fontsLoaded ? <Routes /> : <Loading /> }
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
