import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  kbAvoidingView: { flex: 1, padding: 15 },
  title: { fontWeight: "bold", fontSize: RFPercentage(5.5) },
  formContainer: { flex: 1 },
  buttonContainer: { height: 60, marginBottom: 10 },
  button: {
    width: "100%",
    marginVertical: 10,
    // borderRadius: 55,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.2),
    lineHeight: 26,
  },
  errorText: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 18,
    fontSize: RFPercentage(2),
  },
});
