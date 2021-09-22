import React, { FC, useContext, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Text, TextInput, Button, useTheme } from "react-native-paper";

import SafeArea from "../../../components/Layout/SafeArea";
import Spacer from "../../../components/Layout/Spacer";

import { AuthContext } from "../../../context/Auth.context";
import { ThemeContext } from "../../../context/Theme.context";
import { styles } from "./styles";

const LoginScreen: FC = () => {
  const { colors } = useTheme();
  const { isDarkTheme } = useContext(ThemeContext);
  const { login, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonDisabled = !email || !password;

  return (
    <SafeArea>
      <KeyboardAvoidingView behavior="padding" style={styles.kbAvoidingView}>
        <View style={styles.formContainer}>
          <Spacer y={30} />
          <Text style={styles.title}>Welcome back!</Text>
          <Spacer y={20} />
          <TextInput
            style={{ backgroundColor: colors.background }}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(t) => setEmail(t)}
          />
          <Spacer y={10} />
          <TextInput
            style={{ backgroundColor: colors.background }}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
            label="Password"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
            secureTextEntry
            value={password}
            onChangeText={(t) => setPassword(t)}
          />
          <Spacer y={10} />
          {!!error && (
            <Text style={[styles.errorText, { color: colors.primary }]}>
              {error}
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            mode="contained"
            labelStyle={styles.buttonText}
            disabled={buttonDisabled}
            onPress={() => login({ email, password })}
          >
            Login
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default LoginScreen;
