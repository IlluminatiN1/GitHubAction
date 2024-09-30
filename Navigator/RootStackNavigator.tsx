import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import SettingsScreen from '../Screen/SettingsScreen';
import { Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import TabNavigator, { TabParamList } from './TabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';



export type RootStackParamList = {
    HomeNavigator: NavigatorScreenParams<TabParamList>;
    Settings: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function RootStackNavigator() {
    return (

        <RootStack.Navigator>
            <RootStack.Screen
                name="HomeNavigator"
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="Settings" component={SettingsScreen} />
        </RootStack.Navigator>
    );
}