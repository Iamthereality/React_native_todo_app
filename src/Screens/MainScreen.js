import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Animated, Easing, Dimensions } from 'react-native';

import { AddNewTask } from "../Components/AddNewTask";
import { Tasks } from "../Components/Tasks";
import { AppTextThin } from "../Components/UI/AppTextThin";
import { THEME } from "../Theme";

export const MainScreen = ({ tasks, addTask, removeTask, openTask }) => {
    const [width, setWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);

    useEffect(() => {
        const update = () => {
          const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
          setWidth(width);
        };
        Dimensions.addEventListener('change', update);
        return () => {
          Dimensions.removeEventListener('change', update);
        };
    });

    let content = (
        <FlatList style={ { ...styles.tasks_list, ...width } }
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

        Animated.loop(Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 9000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start();

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
                <AppTextThin style={ styles.greetings_text }>
                    { 'Add your tasks here!' }
                </AppTextThin>
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
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        marginBottom: 10
    },
    greetings: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    greetings_text: {
        fontSize: 26,
        color: THEME.BLACK_COLOR
    }
});