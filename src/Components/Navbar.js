import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = (props) => {
    const { title } = props;
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
        backgroundColor: '#3949ab',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingTop: 20,
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});