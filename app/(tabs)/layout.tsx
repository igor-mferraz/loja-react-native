import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: '#0000ff'}}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={20}
                        name="home"
                        color={color}
                    />
                }}
            />
            {/* <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={20}
                        name="archive"
                        color={color}
                    />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={20}
                        name="user"
                        color={color}
                    />
                }}
            /> */}
        </Tabs>
    )
}