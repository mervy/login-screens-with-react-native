import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/stylesConfirmationScreen";

const BGImage = require("../assets/bg.jpg");

const ConfirmationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Imagem de fundo */}
            <Image
                source={ BGImage } // Substitua pela sua imagem de fundo
                style={styles.backgroundImage}
            />
            <View></View>
            <View style={styles.content}>
                {/* Ícone central */}
                <View style={styles.iconContainer}>
                    <Text style={styles.icon}>✔️</Text>
                </View>

                {/* Texto de confirmação */}
                <Text style={styles.title}>Success!</Text>
                <Text style={styles.message}>Your action was successful!</Text>

                {/* Botão de voltar */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUpScreen")}>
                    <Text style={styles.buttonText}>Go Back</Text>                   
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ConfirmationScreen;
