import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesSignInScreen";

const SignInScreen = ({ navigation }) => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de login.
        alert("Logged in successfully!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in</Text>

            <Text style={styles.label}>Email or Username</Text>
            <TextInput
                style={styles.input}
                value={emailOrUsername}
                onChangeText={setEmailOrUsername}
                placeholder="Enter your email or username"
                placeholderTextColor="#888"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                placeholderTextColor="#888"
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.signupText}>
                Don't have an account?
                <Text style={styles.signupLink} onPress={() => navigation.navigate("SignUpScreen")}>
                    Sign up
                </Text>
            </Text>
        </View>
    );
};

export default SignInScreen;
