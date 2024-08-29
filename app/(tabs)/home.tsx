import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";

export default function Screen(){

    const products = getAllProducts();


    return(
        <View style={styles.container}>
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
