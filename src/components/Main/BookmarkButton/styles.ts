import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonText: {
    fontWeight: "bold",
  },
  buttonLeft: { flex: 4, padding: 10 },
  rightButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
