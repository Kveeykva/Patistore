import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import PatikaStore from "../../components/patikastore";
import SearchInput from "../../components/search";
import Products from "../../components/products";
import data from "../../utilts/product.json"

const HomeScreen = () => {
    return (
        <>

            <PatikaStore />
            <SearchInput />

            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) =>



                    <View>
                        <Products
                            title={item.title}
                            imgURL={item.imgURL}
                            price={item.price}
                            inStock={item.inStock}

                        />
                    </View>
                }
            />
        </>
    );
};
export default HomeScreen;
