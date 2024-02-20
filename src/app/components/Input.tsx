import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from "react-native";

type RightIconType = {
  icon: ReactNode;
  onPress: VoidFunction;
};

type InputProps = TextInputProps & {
  rightIcon?: RightIconType;
};

const Input = (props: InputProps) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    style,
    rightIcon,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={rightIcon.onPress}
          style={styles.iconContainer}
        >
          {rightIcon.icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#B4839C",
    borderRadius: 5,
    padding: 10,
    width: 310,
  },
  iconContainer: {
    marginLeft: 280,
    marginTop: -29,
  },
});
