import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2E2E38",
        padding: 20,
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
    },
    steps: {
        color: "#bbb",
        marginBottom: 20,
    },
    uploadButton: {
        alignSelf: "center",
        backgroundColor: "#444",
        padding: 20,
        borderRadius: 50,
        marginBottom: 10,
    },
    uploadText: {
        textAlign: "center",
        color: "#aaa",
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
    },
    error: {
        color: "red",
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
    loginText: {
        color: "#bbb",
        textAlign: "center",
        marginTop: 20,
    },
    loginLink: {
        color: "white",
        fontWeight: "bold",
    },
});
