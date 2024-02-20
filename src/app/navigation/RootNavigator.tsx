import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import { AuthState } from "./../store/userSlice";
import LoginStack from "./LoginStack";
import { useAppSelector } from "./../store/store";
import { selectAuthState } from "../../app/store/selectors";

export const RootNavigator = () => {
  const authState = useAppSelector(selectAuthState);

  return (
    <NavigationContainer>
      {authState === AuthState.Authenticated ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
};
