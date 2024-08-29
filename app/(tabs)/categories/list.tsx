import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";


export default function Screen(){

    const categories = getAllCategories();


    return(
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={categories}
                renderItem={({item}) => <CategoryItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                // ItemSeparatorComponent={() => <View style={{height: 10}} />}
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
