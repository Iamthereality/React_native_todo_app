import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { AddNewTask } from "../Components/AddNewTask";
import { Tasks } from "../Components/Tasks";

export const MainScreen = (props) => {
    const { tasks, addTask, removeTask, openTask } = props;
    return (
        <>
            <AddNewTask onSubmit={ addTask }/>
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
        </>
    );
};

const styles = StyleSheet.create({
    tasks_list: {
        paddingHorizontal: 10,
        marginBottom: 10
    }
});