import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backButton: {
    position: 'absolute',  // Posicionamento fixo
    top: 20,  // Distância do topo
    left: 10,  // Distância da esquerda
    padding: 10,  // Padding para o ícone
    zIndex: 1, // Garante que o botão fique por cima de outros componentes
},
  
  backgroundImageContainer: {
    width: width,
    height: height * 0.35, // A imagem ocupa apenas o topo da tela
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  formContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3b45d9",
    textAlign: "center",
   paddingTop: 30,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: "#2C3E50",
  },
  button: {
    backgroundColor: "#3498db",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  socialText: {
    fontSize: 14,
    color: "#7F8C8D",
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});