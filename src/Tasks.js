import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Tasks = (props) => {
    const { tasks } = props;

    const render_task = (tasks) => {
       return  tasks.map((task) => {
            return (
                <View style={ styles.task }
                      key={ task.id }>
                    <Text style={ styles.text }>
                        { task.title }
                    </Text>
                </View>
            );
        })
    };

    return(
        <View >{ render_task(tasks) }</View>
    );
};

const styles = StyleSheet.create({
    task: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        marginTop: 15,
        marginBottom: 15,
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