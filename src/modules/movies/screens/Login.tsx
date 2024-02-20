import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthPayload, loginUser } from "../../../app/store/userSlice";
import Input from "../../../app/components/Input";
import Button from "../../../app/components/Button";
import { Ionicons } from "@expo/vector-icons";
import Loader from "../../../app/components/Loader";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigationProps } from "../../../app/navigation/LoginStack";
import { useAppDispatch } from "../../../app/store/store";

type LoginScreenNavigationProp = StackNavigationProp<
  RootNavigationProps,
  "Login"
>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleTouchablePress = () => {
    Keyboard.dismiss();
  };
  const handleLoginPress = async () => {
    const authPayload: AuthPayload = {
      email: email,
      password: password,
    };
  
    setShowLoader(true);
    console.log("DISPATCHING");
    const result = await dispatch(loginUser(authPayload)); 
    if (result){
      Alert.alert("Successfully Logged In");
      setShowLoader(false);
      // if (result) {
      //   Alert.alert("Successfully Logged In");
      // } else {
      //   Alert.alert("Incorrect email or password. Please try again.");
      // }
    } else {
      Alert.alert("Incorrect email or password. Please try again.");
    }
  };
  
  
  



  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchablePress}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome To Movie App</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputContainers}>
            <Input
              placeholder={"Enter Email"}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              placeholder={"Enter Password"}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              rightIcon={{
                icon: (
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#421A37"
                  />
                ),
                onPress: togglePasswordVisibility,
              }}
            />
            <Button
              onPress={handleLoginPress}
              label={"Log In"}
              style={undefined}
            />
            <View style={styles.signUpContainer}>
              <Text onPress={handleSignUpPress} style={styles.signUpText}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
        {showLoader && (
          <View style={styles.loader}>
            <Loader isLoading={true} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "seashell",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#421A37",
    fontSize: 30,
    marginLeft: 1,
    marginTop: 150,
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainers: {
    alignItems: "center",
    marginBottom: "30%",
  },
  signUpContainer: {
    padding: 15,
    width: 310,
  },
  signUpText: {
    color: "#421A37",
    fontWeight: "bold",
    textAlign: "right",
  },
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default Login;
