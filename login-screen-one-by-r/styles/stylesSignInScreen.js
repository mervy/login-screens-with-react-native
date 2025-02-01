import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2E2E38",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
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
        width: "100%",
    },
    loginButton: {
        backgroundColor: "#111",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: "100%",
    },
    loginText: {
        color: "white",
        fontWeight: "bold",
    },
    signupText: {
        color: "#bbb",
        textAlign: "center",
        marginTop: 20,
    },
    signupLink: {
        color: "white",
        fontWeight: "bold",
    },
});
