import { Dimensions, StyleSheet } from 'react-native';


const window = Dimensions.get("window").width

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 10,
        flex: 1,
        width: window / 2,

    },
    card: {
        backgroundColor: "#ECEFF1",
        padding: 15,
        borderRadius: 12,

    },
    imgURL: {
        height: Dimensions.get('window').height / 3,
        borderRadius: 15,


    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
    },
    price: {
        color: "#808080",
        fontWeight: "bold",
        fontSize: 14
    },
    stock: {
        color: "red",
        fontSize: 17,
        fontWeight: "bold"

    }

});

export default styles;