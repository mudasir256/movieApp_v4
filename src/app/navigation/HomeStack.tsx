import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackRoutes, MoviesStackRoutes } from "./routes";
import MovieDetailsModal from "../../modules/movies/screens/MovieDetailsModal";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllMovies from "../../modules/movies/screens/AllMovies";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Favorite from "../../modules/movies/screens/Favorite";
import userSlice from "../../app/store/userSlice";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
export type RootNavigationProps = {
Home:undefined;
Detail:undefined;
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: "#421A37" },
        headerTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#421A37" },
        tabBarActiveTintColor: "#ffffff",
      })}
    >
      <BottomTab.Screen
        name={MoviesStackRoutes.AllMovies}
        component={AllMovies}
        options={() => ({
          title: "All Movies",
          tabBarLabel: "All Movies",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film" size={size} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name={MoviesStackRoutes.Favorites}
        component={Favorite}
        options={{
          title: "Favorite Movies",
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HomeStackRoutes.Home}>
    <Stack.Screen
      name={HomeStackRoutes.Home}
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={HomeStackRoutes.Detail}
      component={MovieDetailsModal}
      options={() => ({
        title: "Movies Detail",
        headerStyle: { backgroundColor: "#421A37" },
        headerTintColor: "#ffffff",
      })}
    />
  </Stack.Navigator>
);

export default HomeStack;
