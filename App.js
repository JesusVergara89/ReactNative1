import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//const logoImg = require("./assets/adaptive-icon.png")



export default function App() {
  const [hideStatusBar, setHideStatusBar] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 60 }}>
     <Button title="Alert"
     onPress={()=> Alert.alert("invalid data!")}
     />
      <Button title="Alert2"
     onPress={()=> Alert.alert("invalid data!", "DOB incorrect")}
     />
     <Button title="Alert3"
     onPress={()=> Alert.alert("invalid data!", "DOB incorrect", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel press")
      },
      {
        text: "Ok",
        onPress: () => console.log("ok press")
      }
     ])}
     />
    </View>
  );
}


