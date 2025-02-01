import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoginStyle";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleNext = () => {
        if (username === "Rafael") {
            setError("Username already in use.");
        } else {
            setError("");
            navigation.navigate("NextStep");
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.title}>New Account</Text>
        </View>
    );
};



export default LoginScreen;