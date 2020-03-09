import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const TaskScreen = (props) => {
    const { backToTasksList } = props;
    return (
        <View>
            <Text>
                { 'Task Screen' }
            </Text>
            <TouchableOpacity style={ styles.button }
                              onPress={ () => backToTasksList(null) }
                              activeOpacity={ 0.7 }
            >
                <Text style={ styles.text }>
                    { 'Back' }
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '30%',
        borderRadius: 10,
        height: 40,
        backgroundColor: '#3949ab',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
});