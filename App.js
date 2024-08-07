import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//const logoImg = require("./assets/adaptive-icon.png")



export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }} >
    
    <Button
    title="View modal"
    onPress={() => setIsModalVisible(true)}
    color="midnightblue"
    />

    <Modal visible={isModalVisible} onRequestClose={()=>setIsModalVisible(false)} animationType="slice" presentationStyle="pageSheet">
      <View style={{flex:1, backgroundColor: "lightgreen", padding: 60}}>
           <Text>Modal content</Text>
           <Button
           title="Close"
           onPress={() => setIsModalVisible(false)}
           color="midnightblue"
           />
      </View>      
    </Modal>
  </View>
}

{/*disabled: for default is True  */ }
