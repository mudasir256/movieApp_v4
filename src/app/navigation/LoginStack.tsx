import {  StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { HomeStackRoutes, LoginStackRoutes } from "./routes";
import Login from "../../modules/movies/screens/Login";
import Splash from "../../modules/movies/screens/Splash";
import SignUp from "../../modules/movies/screens/SignUp";
import HomeStack from "./HomeStack";
const Stack = createStackNavigator();

export type RootNavigationProps = {
  Login: undefined;
  Splash: undefined;
  SignUp: undefined;
  Home: undefined;
}

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={LoginStackRoutes.Splash}
      component={Splash}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={LoginStackRoutes.Login}
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={LoginStackRoutes.SignUp}
      component={SignUp}
      options={() => ({
        title: "Sign Up",
        headerStyle: { backgroundColor: "#421A37" },
        headerTintColor: "#ffffff",
      })}
    />
        <Stack.Screen
      name={HomeStackRoutes.Home}
      component={HomeStack}
      options={{
        headerShown: false,

      }}
    />
  </Stack.Navigator>
);

export default LoginStack;