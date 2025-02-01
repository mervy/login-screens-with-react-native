import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between", // Distribui os elementos na tela
    backgroundColor: "#2C3E50",
  },
  backgroundImage: {
    position: "absolute",
    width: width,
    height: height,
  },
  titleContainer: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f0c330",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#D5DBDB",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadiusLeft: 25,
  },
  buttonLeft: {
    backgroundColor: "#fff",
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,    
  },
  buttonRight: {
    backgroundColor: "#3498db",
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35, 
  },
  buttonTextLeft: {
    color: "#3498db",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextRight: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

