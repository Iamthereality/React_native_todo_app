import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { THEME } from "../Theme";

export const AddNewTask = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('There is no task name');
        }
    };

    const onTaskNameInput = (text) => {
        setValue(text);
    };

    return (
        <View style={ styles.form }>
            <TextInput style={ styles.input }
                       onChangeText={ onTaskNameInput }
                       placeholder={ 'Type task name' }
                       value={ value }
                       autoCorrect={ false }
                       autoCapitalized={ 'none' }
            />
            <TouchableOpacity style={ styles.button }
                              onPress={ pressHandler }
                              activeOpacity={ 0.7 }
            >
                <Text style={ styles.text }>
                    { 'Add  task' }
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    input: {
        width: '65%',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        marginRight: 5,
        padding: 5
    },
    button: {
        width: '30%',
        borderRadius: 10,
        height: 40,
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        color: THEME.FONT_COLOR,
        fontSize: 16
    }
});