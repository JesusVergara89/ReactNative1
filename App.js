import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")
const BackImg = require("./assets/favicon.png")

export default function App() {
  return <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum"
  }} >
    <View
      style={{
        width: 250,
        height: 200,
        backgroundColor: "lightblue"
      }}
    >
      <Text
        style={{
          textAlign: "center",
          paddingTop: "50%"
        }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: "https://picsum.photos/50" }}
        />
        <Text style={{ color: "red" }}>Hello</Text> word
      </Text>
    </View>
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: "lightgreen"
      }}
    >
      <Image
        style={{ width: "contain", height: "100%" }}
        source={logoImg}
      />
    </View>
    <ImageBackground
    style={{flex: 1}}
     source={BackImg}>
           <Text>IMAGE TEXT</Text>
    </ImageBackground>

  </View>
}