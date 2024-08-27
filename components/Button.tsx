import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    title: string;
    onPress : () => void;
}

export const Button = ({ title, onPress }:Props) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
           <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#164e85',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal:24
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})