import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/WelcomeStyle";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          {/* Imagem de fundo */}
          <ImageBackground
            source={require("../../assets/bg.png")} // Substitua pela sua imagem
            style={styles.backgroundImage}
            resizeMode="cover"
          />
    
          {/* Título e subtítulo no centro da tela */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Enter personal details to access your account
            </Text>
          </View>
    
          {/* Botões no final da tela */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonLeft]}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.buttonTextLeft}>Sign In</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={[styles.button, styles.buttonRight]}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonTextRight}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }