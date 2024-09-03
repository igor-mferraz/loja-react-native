import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { router } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export const CustomDrawer = (props:DrawerContentComponentProps) => {
    return(
        <DrawerContentScrollView {...props} style={styles.scrollView}>
            <View style={styles.headerArea}>

            </View>
            <DrawerItemList {...props}/>
            <DrawerItem
                label='menu'
                onPress={()=> router.push('/about')}
            />

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: '#999'
    },
    headerArea:{
        backgroundColor: 'red',
        height: 80
    }
})