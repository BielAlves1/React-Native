import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    height: 50,
    width: "90%",
    backgroundColor: "#6C7372",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    marginBottom: "5%",
  },
  icon: {
    height: 25,
    width: 25,
  },
  descricaoTask: {
    fontSize: 13,
    color: "#fff",
    width: "45%",
  },
  contentBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "28%",
  },
  btnRemove: {
    height: 25,
    width: 25,
    backgroundColor: "#C83A3A",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  btTextRemove: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 7.5,
    color: "#740A0A",
  },
});
