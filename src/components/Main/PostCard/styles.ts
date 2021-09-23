import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfosContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userTextInfoContainer: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.2),
  },
  text: {
    fontSize: RFPercentage(2.2),
    fontWeight: "500",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: RFPercentage(2),
    fontWeight: "bold",
  },
  commentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
