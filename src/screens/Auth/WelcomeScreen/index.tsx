import React, { useContext, useEffect } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Text, Paragraph, Button, useTheme } from "react-native-paper";

import { AuthStackNavProps } from "../../../navigation/Auth.stack";
import { AuthContext } from "../../../context/Auth.context";
import { styles } from "./styles";

const WelcomeScreen = ({ navigation }: AuthStackNavProps<"WelcomeScreen">) => {
  const { colors } = useTheme();
  const { clearError } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearError();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>M. L. S.</Text>
        <Paragraph style={[styles.subheader, { color: colors.primary }]}>
          aka My Life Sucks
        </Paragraph>
        <Paragraph style={styles.text}>
          The social platform to roast people about their everyday's accidents.
        </Paragraph>

        <Button
          style={[styles.button]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          Login
        </Button>

        <Button
          style={[
            styles.button,
            { backgroundColor: colors.background, borderColor: colors.primary },
          ]}
          labelStyle={[styles.buttonText, { color: colors.text }]}
          mode="outlined"
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          Register
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default WelcomeScreen;
