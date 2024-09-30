import { ScrollView, StyleSheet, Text, View, Image } from "react-native"
import { useEffect, useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function HomeScreen() {

    return (
        <ScrollView> 
                <View style={s.container}>
                    <View style={s.iconContainer}>
                        <MaterialIcons name="favorite" size={24} color="grey" />
                    </View>
                </View>
        </ScrollView>
    );
}
const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    iconContainer: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    text: {
        marginTop: 10,
        color: "white",
        fontSize: 20,
    },
});