import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import FavoritesScreen from "../Screen/FavoriteScreen";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type TabParamList = {
    Home: undefined;
    Favorites: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ navigation }) => ({

            headerRight: (props) => (
                <Feather
                    name="settings"
                    size={24}
                    color="black"
                    onPress={() => navigation.navigate("Settings")}
                />
            ),
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: (props) => (
                    <MaterialIcons name="home" size={props.size} color={props.color} />  //Added icon for homebutton
                )
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator >
    )
}