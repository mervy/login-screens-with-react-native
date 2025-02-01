import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/stylesValidationScreen";

const NextStep = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerify = () => {
    // Lógica para verificar o código
    if (verificationCode === "123456") {
      navigation.navigate("ConfirmationScreen");
    } else {
      alert("Invalid code");
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>{'New\nAccount'}</Text>
        <Text style={styles.steps}>2 / 2 STEPS</Text>
      </View>

      {/* Campo de Código de Verificação */}
      <Text style={styles.label}>Verification Code</Text>
      <TextInput
        style={styles.input}
        value={verificationCode}
        onChangeText={setVerificationCode}
        placeholder="Enter code sent to your email"
        placeholderTextColor="#888"
      />

      {/* Botão de Verificação */}
      <TouchableOpacity style={styles.nextButton} onPress={handleVerify}>
        <Text style={styles.nextText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextStep;


