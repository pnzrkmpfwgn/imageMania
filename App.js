import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import About from "./screens/about";
import Images from "./screens/images_screen";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ImageDetail from "./screens/image";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Images" component={Images} />
        <Stack.Screen name="Image" component={ImageDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
