import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2E2E38",
      padding: 20,
    },
    backButton: {
      marginTop: 20,
    },
    headerContainer: {
        margin: 15,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    },
    steps: {
      color: "#bbb",
      textAlign: "center",
      marginTop: 5,
    },
    label: {
      color: "#bbb",
      marginTop: 10,
    },
    input: {
      backgroundColor: "#444",
      color: "white",
      padding: 10,
      borderRadius: 5,
      marginTop: 5,
    },
    nextButton: {
      backgroundColor: "#111",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
    },
    nextText: {
      color: "white",
      fontWeight: "bold",
    },
  });