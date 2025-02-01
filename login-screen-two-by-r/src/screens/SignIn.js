import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/SignInStyle"; // Importa os estilos

export default function SignInScreen() {
    const navigation = useNavigation();
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#000" />
            </TouchableOpacity>

            {/* Imagem de fundo no topo */}
            <View style={styles.backgroundImageContainer}>
                <ImageBackground
                    source={require("../../assets/bg.png")} // Substitua pela sua imagem
                    style={styles.backgroundImage}
                />
            </View>

            {/* Formulário */}
            <View style={styles.formContainer}>
                <Text style={styles.title}>Welcome Back</Text>

                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

                <TextInput style={styles.input} placeholder="Password" secureTextEntry />

                <View style={styles.checkboxContainer}>
                    <Switch
                        value={rememberMe}
                        onValueChange={setRememberMe}
                        trackColor={{ false: "#BDC3C7", true: "#3498db" }}
                        thumbColor={rememberMe ? "#fff" : "#f4f3f4"}
                    />
                    <Text style={styles.checkboxText}>Remember me</Text>
                    <TouchableOpacity>
                        <Text style={[styles.checkboxText, { color: "#3498db" }]}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            {/* Botões de redes sociais */}
            <View style={styles.socialContainer}>
                <Text style={styles.socialText}>Sign in with</Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity>
                        <Icon name="facebook" size={40} color="#1877F2" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="times" size={40} color="#1DA1F2" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="google" size={40} color="#DB4437" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="apple" size={40} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
