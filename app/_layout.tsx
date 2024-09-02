import { Stack } from "expo-router";
import {Drawer} from 'expo-router/drawer';
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                drawerPosition: 'left',
                drawerType: 'front',
                drawerActiveTintColor: '#000',
                drawerContentStyle: {
                    backgroundColor: '#ccc',
                    width:200
                },
                drawerContentContainerStyle: {
                    width: 200
                },
                drawerStyle:{
                    width: 200
                }

            }}>
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