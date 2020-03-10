import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from "../../Theme";

export const AppCard = (props) => {
    return (
        <View style={ styles.default }>
            { props.children }
        </View>
    )
};

const styles = StyleSheet.create({
    default: {
        backgroundColor: THEME.FONT_COLOR,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 6
    }
});