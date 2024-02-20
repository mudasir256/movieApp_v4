import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackRoutes, MoviesStackRoutes, LoginStackRoutes } from "./routes";
import MovieDetailsModal from "../../modules/movies/screens/MovieDetailsModal";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllMovies from "../../modules/movies/screens/AllMovies";
import Favorite from "../../modules/movies/screens/Favorite";
import { Ionicons } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import  Modal  from "../components/Modal";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            dispatch(logoutUser());
            navigation.navigate(LoginStackRoutes.Login);
          },
        },
      ],
      { cancelable: false }
    );
  };
  

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
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={handleLogout}
            >
              <Ionicons name="log-out" size={24} color="white" />
            </TouchableOpacity>
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
      {showModal && <Modal navigation={undefined}/>}
    </BottomTab.Navigator>
  );
};

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
function logoutUser(): any {
  throw new Error("Function not implemented.");
}

