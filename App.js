import { View, Text, Image, ScrollView, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }} >
    <Button
    title="Press"
    onPress={()=>console.log("you have press the btn")}
    color="midnightblue"
    disabled={false}
    />
  </View>
}

{/*disabled: for default is True  */}