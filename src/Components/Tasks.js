import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Tasks = (props) => {
    const { task, onRemove, onOpen } = props;
    return (
        <TouchableOpacity activeOpacity={ 0.5 }
                          onPress={ () => onOpen(task.id) }
                          onLongPress={ () => onRemove(task.id) }
        >
            <View style={ styles.task }>
                <Text style={ styles.text }>
                    { task.title }
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: '#3949ab',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
        height: 'auto'
    },
    text: {
        alignItems: 'center',
        fontSize: 18,
        padding: 10
    }
});