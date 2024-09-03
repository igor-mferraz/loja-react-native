import { Stack } from "expo-router";
import {Drawer} from 'expo-router/drawer';
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomDrawer } from "../components/custom-drawer";

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer 
                screenOptions={{drawerStyle:{ width: '70%' }}}
                drawerContent={(props)=> <CustomDrawer {...props}/>}>
                <Drawer.Screen
                    name="index"
                    options={{drawerLabel: 'Inicio', headerTitle: 'Home', drawerIcon: ({color,size}) => <View style={{width: size, height:size, backgroundColor: color}}></View> }}
                />
                <Drawer.Screen
                    name="about"
                    options={{drawerLabel: 'Sobre', headerTitle: 'Sobre'}}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}