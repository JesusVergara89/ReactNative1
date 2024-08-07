import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Greet from "./components/Greet";
//const logoImg = require("./assets/adaptive-icon.png")


export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 60 }}>
    <Greet name="Jesus" />
    <Greet name="Rogert" />
    <Greet name="Samuel" />
    <Greet name="Edilma" />
    <Greet name="Renata" />
    <Greet name="Romina" />
    </View>
  );
}


