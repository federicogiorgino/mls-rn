import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  userInfoPanel: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
  },
  userInfoPanelCardContainer: {
    flexDirection: "row",
  },
  followerCard: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderRadius: 5,
  },
  followerCardLabel: { fontWeight: "bold", fontSize: RFPercentage(2.5) },
  followerCardValue: { fontSize: RFPercentage(2) },
  profilePic: { width: 150, height: 150, borderRadius: 99, marginBottom: 20 },
  usernameText: { fontWeight: "bold", fontSize: RFPercentage(4) },
  logoutIcon: { position: "absolute", top: 30, right: 30 },
});
