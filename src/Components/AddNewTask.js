import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { THEME } from "../Theme";
import { AppButton } from './UI/AppButton';

export const AddNewTask = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
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
            <AppButton  buttonStyle={ styles.button }
                        textStyle={ styles.text }
                        onPress={ pressHandler }
            >
                <AntDesign name={ 'pluscircleo' } size={ 25 } style={ styles.text }/>
            </AppButton>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'flex-end',
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
        width: '30%'
    },
    text: {
        textAlign: 'center'
    }
});