import React from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";





const SearchInput = () => {
    const [text, onChangeText] = React.useState("Ara...");

    return (
        <SafeAreaView>
            <View style={styles.view_input}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}

                />
            </View>
        </SafeAreaView>
    );
};
export default SearchInput;
