import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export const AddNewTask = (props) => {
    const [value, setValue] = useState('');

    const { onSubmit } = props;

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {

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
                       value={ value }/>
            <TouchableOpacity style={ styles.button } onPress={ pressHandler }>
                <Text style={ styles.text }>{ 'Add new task' }</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '65%',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        marginRight: 5,
        padding: 5
    },
    button: {
        width: '35%',
        borderRadius: 10,
        height: 40,
        backgroundColor: '#3949ab',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
});