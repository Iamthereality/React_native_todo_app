import React from 'react';
import { View, StyleSheet, FlatList, Text, Image, Animated, Easing } from 'react-native';
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
        const spinValue = new Animated.Value(0);

        // First set up animation
        Animated.loop(Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start();

        // Second interpolate beginning and end values (in this case 0 and 1)
        const spin = spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['360deg', '0deg']
        });

        content = (
            <View style={ styles.greetings }>
                <View style={ styles.image_wrap }>
                    <Animated.Image style={ { ...styles.image, transform: [{rotate: spin}] } }
                           source={ require('../../assets/react_icon.png') }
                    />
                </View>
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
    image_wrap: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: 300
    },
    tasks_list: {
        paddingHorizontal: 10,
        marginBottom: 10
    },
    greetings: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    greetings_text: {
        fontSize: 26
    }
});