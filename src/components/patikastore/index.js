import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './styles';



const PatikaStore = (props) => {
    return (
        <SafeAreaView>
            <Text style={styles.title}> PATIKASTORE </Text>
        </SafeAreaView>
    );
};
export default PatikaStore;
