import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/stylesSignUpScreen";

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleNext = () => {
        if (username === "rafa") {
            setError("Username already in use.");
        } else {
            setError("");
            navigation.navigate("ValidationScreen"); // Navegação para a próxima tela
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{"New\nAccount"}</Text>
                <Text style={styles.steps}>1 / 2 STEPS</Text>
            </View>

            {/* Upload de foto */}
            <TouchableOpacity style={styles.uploadButton}>
                <Ionicons name="link-outline" size={30} color="#ccc" />
            </TouchableOpacity>
            <Text style={styles.uploadText}>Upload a profile picture (optional)</Text>

            {/* Campo Nome */}
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Your Name"
                placeholderTextColor="#888"
            />

            {/* Campo Usuário */}
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                placeholderTextColor="#888"
            />

            {/* Campo E-mail */}
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="mail@mail.com"
                placeholderTextColor="#888"
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            {/* Botão Próximo */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>

            {/* Link para Login */}
            <Text style={styles.loginText}>
                Not the first time here?{" "}
                <Text style={styles.loginLink} onPress={() => 
                    navigation.navigate("SignInScreen")}>
                    Log in.
                </Text>
            </Text>
        </View>
    );
};

export default SignUpScreen;
