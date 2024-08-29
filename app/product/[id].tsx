import { router, Stack, useLocalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button } from "../../components/Button"
import { getProductById } from "../../services/product";

export default function Screen(){

    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if(!product) return router.back();


    const handleBtn = () => {
        alert(id)
    }


    return(
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{title:''}}/>
            <ScrollView style={styles.area}>

                <Image
                    style={styles.img}
                    source={{uri: product.image}}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>{product.price.toFixed(2)}</Text>
                </View>

            </ScrollView>
            <View style={styles.buttonArea}>
                <Button title="Comprar" onPress={handleBtn}/>
                    
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area: {
        flex: 1,
        padding: 10
    },
    buttonArea: {
        padding: 10
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 14,
        color: '#55555',
        marginBottom: 20
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#cccccc'
    },
    price: {
        fontSize: 22,
        textAlign:'center'
    }

})