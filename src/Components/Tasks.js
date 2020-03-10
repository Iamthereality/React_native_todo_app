import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AppCard} from "./UI/AppCard";

export const Tasks = ({ task, onRemove, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={ 0.9 }
                          onPress={ () => onOpen(task.id) }
                          onLongPress={ () => onRemove(task.id) }
                          style={ styles.task }
        >
            <AppCard>
                <Text style={ styles.text }>
                    { task.title }
                </Text>
            </AppCard>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    task: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        minHeight: 40,
        height: 'auto',
        paddingHorizontal: 5
    },
    text: {
        alignItems: 'center',
        fontSize: 18,
        padding: 10
    }
});