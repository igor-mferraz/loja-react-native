import { StyleSheet, View, SafeAreaView, Image, Text } from "react-native"

export default function Screen(){



    return(
        <SafeAreaView style={styles.container}>
            <Text>Sobre o autor</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    h1:{
        fontSize: 22,
        fontWeight: 'bold'
    }
})