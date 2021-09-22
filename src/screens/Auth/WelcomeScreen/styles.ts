import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: Dimensions.get("screen").width / 0.9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: RFPercentage(30),
    height: RFPercentage(30),
    marginBottom: 12,
  },
  header: {
    fontSize: RFPercentage(7),
    fontWeight: "900",
    paddingTop: 14,
  },
  subheader: {
    fontSize: RFPercentage(3),
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 14,
    fontWeight: "bold",
  },
  text: {
    fontSize: RFPercentage(2.5),
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 14,
  },
  button: {
    width: "100%",
    marginVertical: 10,
    // borderRadius: 55,
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.2),
    lineHeight: 26,
    color: "#000000",
  },
});
