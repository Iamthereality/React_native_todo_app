import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from "./src/Navbar";
import { AddNewTask } from "./src/AddNewTask";
import { Tasks } from "./src/Tasks";

export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks(prevTasks => [
            ...prevTasks,
            {
                id:Date.now().toString(),
                title
            }
        ])
    };

    return (
        <View>
            <Navbar title={ `Todo Application` }/>
            <View style={ styles.container }>
                <AddNewTask onSubmit={ addTask }/>
                <Tasks tasks={ tasks }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});
