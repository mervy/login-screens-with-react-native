import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Para cobrir toda a tela
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo semitransparente para destacar o conteúdo
    borderRadius: 10,
    width: '80%',
    maxWidth: 350,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 60,
    color: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
