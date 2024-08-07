import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//const logoImg = require("./assets/adaptive-icon.png")



export default function App() {
  const [hideStatusBar, setHideStatusBar] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 60 }}>
      <ActivityIndicator
      />
      <ActivityIndicator
      size="large"
      />
      <ActivityIndicator
      color="midnightblue"
      size="large"
      />
      <ActivityIndicator
      color="midnightblue"
      size="large"
      animating={true}
      />
    </View>
  );
}


