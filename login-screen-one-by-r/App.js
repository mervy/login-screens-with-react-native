import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import ValidationScreen from "./screens/ValidationScreen"; 
import ConfirmationScreen from "./screens/ConfirmationScreen";
import { StatusBar } from "expo-status-bar";

// Criação da Stack Navigator
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUpScreen">
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="ValidationScreen" component={ValidationScreen} />
                <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />

            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
