import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME } from "../../Theme";

export const AppTextThin = ({ style, children }) => {
    return (
        <Text style={ { ...styles.default, ...style } }>
            { children }
        </Text>
    );
};

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'roboto-thin',
        color: THEME.FONT_COLOR,
        fontSize: 16
    }
});