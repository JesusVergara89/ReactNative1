import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//const logoImg = require("./assets/adaptive-icon.png")



export default function App() {
  const [hideStatusBar, setHideStatusBar] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="light-content"
        hidden={hideStatusBar}
      />
      <Button
        title={hideStatusBar ? "Show" : "Hide"}
        onPress={() => setHideStatusBar(prevState => !prevState)}
      />
    </View>
  );
}


