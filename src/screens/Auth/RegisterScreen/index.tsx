import React, { FC, useContext, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Text, TextInput, Button, useTheme } from "react-native-paper";

import SafeArea from "../../../components/Layout/SafeArea";
import Spacer from "../../../components/Layout/Spacer";
import { AuthContext } from "../../../context/Auth.context";
import { ThemeContext } from "../../../context/Theme.context";

import { styles } from "./styles";

const RegisterScreen: FC = () => {
  const { colors } = useTheme();
  const { isDarkTheme } = useContext(ThemeContext);
  const { register, error } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const buttonDisabled = !email || !password || !username;

  return (
    <SafeArea>
      <KeyboardAvoidingView behavior="padding" style={styles.kbAvoidingView}>
        <View style={styles.formContainer}>
          <Spacer y={30} />
          <Text style={styles.title}>Create account</Text>
          <Spacer y={20} />
          <TextInput
            style={{ backgroundColor: colors.background }}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
            label="Username"
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
            onChangeText={(t) => setUsername(t)}
          />
          <Spacer y={10} />
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
            labelStyle={[styles.buttonText]}
            disabled={buttonDisabled}
            onPress={() => register({ username, email, password })}
          >
            Register
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default RegisterScreen;
