import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from "../Theme";

export const Navbar = ({ title }) => {
    return (
        <View style={ styles.navbar }>
            <Text style={ styles.text }>
                { title }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingTop: 20,
        marginBottom: 10
    },
    text: {
        color: THEME.FONT_COLOR,
        fontSize: 20
    }
});