import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { AppCard } from "./UI/AppCard";
import {AppTextRegular} from "./UI/AppTextRegular";

export const Tasks = ({ task, onRemove, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={ 0.9 }
                          onPress={ () => onOpen(task.id) }
                          onLongPress={ () => onRemove(task.id) }
                          style={ styles.task }
        >
            <AppCard>
                <AppTextRegular style={ styles.text }>
                    { task.title }
                </AppTextRegular>
            </AppCard>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    task: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        minHeight: 40,
        height: 'auto',
    },
    text: {
        alignItems: 'center',
        fontSize: 18,
        padding: 10
    }
});