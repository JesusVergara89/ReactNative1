import { View, Text } from "react-native";

export default function App() {
  return <View style={{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum"
    }} >
    <View 
    style={{
      width:250,
      height:200,
      backgroundColor: "lightblue"
    }}
    >
     <Text 
     style={{
      textAlign: "center",
      paddingTop: "50%"
     }}
     >
      <Text style={{color: "red"}}>Hello</Text> word
      </Text>
    </View>
     <View 
    style={{
      width:200,
      height:200,
      backgroundColor: "lightgreen"
    }}
    ></View>
  </View>
}