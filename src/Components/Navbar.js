import React from 'react';
import { View,  StyleSheet } from 'react-native'

import { THEME } from "../Theme";
import {AppTextThin} from "./UI/AppTextThin";

export const Navbar = ({ title }) => {
    return (
        <View style={ styles.navbar }>
            <AppTextThin style={ styles.text }>
                { title }
            </AppTextThin>
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