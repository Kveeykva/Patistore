import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Products = (props) => {

    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.card}>
                <Image source={{ uri: props.imgURL }} style={styles.imgURL} resizeMode="contain" />
                <View>
                    <Text style={styles.title} >{props.title}</Text>
                    <Text style={styles.price}>{props.price}</Text>
                    {!props.inStock && <Text style={styles.stock}> Stokta Yok</Text>}
                </View>
            </View>
        </SafeAreaView >

    );
};
export default Products;
