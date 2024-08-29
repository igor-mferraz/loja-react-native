import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts, getProductsByCategory } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";

export default function Screen(){

    const { id } = useLocalSearchParams();
    const idCategory = parseInt(id as string);

    const category = getCategoryById(idCategory);

    if(!category) return router.back();

    const products = getProductsByCategory(idCategory);

    return(
        <View style={styles.container}>
            <Stack.Screen options={{title: category.title}}/>
            <FlatList
                style={styles.list}
                data={products}
                renderItem={({item}) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cccccc'
    },
    list: {
        display: 'flex',
        flex: 1,
        width: '100%',
        gap: 10,
        padding: 10
    }
})
