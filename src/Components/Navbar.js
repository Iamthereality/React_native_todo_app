import React from 'react';
import { View,  StyleSheet, Platform } from 'react-native'

import { THEME } from "../Theme";
import {AppTextThin} from "./UI/AppTextThin";

export const Navbar = ({ title }) => {
    return (
        <View style={ {...styles.navbar, ...Platform.select({
                ios: styles.navbar_ios,
                android: styles.navbar_android
            }) }}>
            <AppTextThin style={ {...styles.text, ...Platform.select({
                    ios: styles.text_ios,
                    android: styles.navbar_android
                }) } }>
                { title }
            </AppTextThin>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingTop: 20,
        marginBottom: 10
    },
    navbar_android: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbar_ios: {
      borderBottomColor: THEME.MAIN_COLOR,
      borderBottomWidth: 1
    },
    text: {
        fontSize: 20
    },
    text_android: {
        color: THEME.FONT_COLOR
    },
    text_ios: {
        color: THEME.MAIN_COLOR
    }
});