import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { AddNewTask } from "../Components/AddNewTask";
import { Tasks } from "../Components/Tasks";

export const MainScreen = ({ tasks, addTask, removeTask, openTask }) => {

    let content = (
        <FlatList style={ styles.tasks_list }
                  keyExtractor={ item => item.id.toString() }
                  data={ tasks }
                  renderItem={
                      ({ item }) => (
                          <Tasks task={ item }
                                 onRemove={ removeTask }
                                 onOpen={ openTask }
                          />
                      )
                  }
        />
    );

    if (tasks.length === 0) {
        content = (
            <View style={ styles.greetings }>
                <Text style={ styles.greetings_text }>
                    { 'Add your tasks here!' }
                </Text>
            </View>
        );
    }

    return (
        <>
            <AddNewTask onSubmit={ addTask }/>
            { content }
        </>
    );
};

const styles = StyleSheet.create({
    tasks_list: {
        paddingHorizontal: 10,
        marginBottom: 10
    },
    greetings: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    greetings_text: {
        fontSize: 26
    }
});