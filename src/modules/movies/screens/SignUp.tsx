import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Input from "../../../app/components/Input";
import Button from "../../../app/components/Button";
import { AuthPayload, signUpUser } from "../../../app/store/userSlice";
import { useAppDispatch } from "../../../app/store/store";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    const authPayload: AuthPayload = {
      email: email,
      password: password,
    };
    dispatch(signUpUser(authPayload));
  };

  const handleTouchablePress = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Input
            placeholder="Enter Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Enter Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            onPress={handleSignUp}
            label="Sign Up"
            style={styles.button}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "seashell",
    paddingBottom: 100,
  },
  input: {
    marginBottom: 10,
    width: 300,
  },
  button: {
    marginTop: 20,
  },
});

export default SignUp;
