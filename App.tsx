const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import VERBCONVERT from "./screens/VERBCONVERT";
import QUIZV31 from "./screens/QUIZV31";
import QUIZV311 from "./screens/QUIZV311";
import QUIZV32 from "./screens/QUIZV32";
import QUIZV321 from "./screens/QUIZV321";
import QUIZV322 from "./screens/QUIZV322";
import QUIZV312 from "./screens/QUIZV312";
import QUIZV313 from "./screens/QUIZV313";
import QUIZV21 from "./screens/QUIZV21";
import QUIZV211 from "./screens/QUIZV211";
import QUIZV212 from "./screens/QUIZV212";
import QUIZV213 from "./screens/QUIZV213";
import QUIZV214 from "./screens/QUIZV214";
import QUIZV215 from "./screens/QUIZV215";
import QUIZV216 from "./screens/QUIZV216";
import QUIZV217 from "./screens/QUIZV217";
import ABOUTVERB from "./screens/ABOUTVERB";
import QUIZLEVELSELECTION from "./screens/QUIZLEVELSELECTION";
import Splash from "./screens/Splash";
import Splash1 from "./screens/Splash1";
import IPhone14ProMax1 from "./screens/IPhone14ProMax1";
import QUIZV11 from "./screens/QUIZV11";
import QUIZV111 from "./screens/QUIZV111";
import QUIZV112 from "./screens/QUIZV112";
import QUIZV218 from "./screens/QUIZV218";
import QUIZV12 from "./screens/QUIZV12";
import QUIZV121 from "./screens/QUIZV121";
import QUIZV122 from "./screens/QUIZV122";
import QUIZV113 from "./screens/QUIZV113";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Karma_bold: require("./assets/fonts/Karma_bold.ttf"),
    Play_bold: require("./assets/fonts/Play_bold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VERBCONVERT"
              component={VERBCONVERT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV31"
              component={QUIZV31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV311"
              component={QUIZV311}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV32"
              component={QUIZV32}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV321"
              component={QUIZV321}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV322"
              component={QUIZV322}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV312"
              component={QUIZV312}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV313"
              component={QUIZV313}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV21"
              component={QUIZV21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV211"
              component={QUIZV211}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV212"
              component={QUIZV212}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV213"
              component={QUIZV213}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV214"
              component={QUIZV214}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV215"
              component={QUIZV215}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV216"
              component={QUIZV216}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV217"
              component={QUIZV217}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ABOUTVERB"
              component={ABOUTVERB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZLEVELSELECTION"
              component={QUIZLEVELSELECTION}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax1"
              component={IPhone14ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV11"
              component={QUIZV11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV111"
              component={QUIZV111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV112"
              component={QUIZV112}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV218"
              component={QUIZV218}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV12"
              component={QUIZV12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV121"
              component={QUIZV121}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV122"
              component={QUIZV122}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZV113"
              component={QUIZV113}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
