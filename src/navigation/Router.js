import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/homeScreen";


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Group>

                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />




                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
