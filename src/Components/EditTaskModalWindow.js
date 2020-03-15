import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { THEME } from "../Theme";
import { AppTextThin } from "./UI/AppTextThin";
import { AppButton } from './UI/AppButton';

export const EditTaskModalWindow = ({ visibility, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3 ) {
            Alert.alert(
                `Attention!`,
                `The task title must be at least 3 symbols length, now it's equal to ${title.trim().length}`
            );
        } else {
            onSave(title);
            Keyboard.dismiss();
        }
    };

    return (
        <Modal visible={ visibility }
               animationtype={ 'slide' }
               transparent={ true }
        >
            <View style={ styles.modal_window }>
                <View style={ styles.input_field }>
                    <AppTextThin style={ styles.input_field_header }>
                        { 'Change the task title:' }
                    </AppTextThin>
                    <TextInput style={ styles.input }
                               autoCapitalize={ 'none' }
                               autocorrect={ 'false' }
                               value={ title }
                               onChangeText={ setTitle }
                    />
                </View>
                <View style={ styles.buttons_container }>
                    <AppButton buttonStyle={styles.cancel_button }
                               textStyle={ styles.text }
                               onPress={ onCancel }
                    >
                        <AntDesign name={ 'back' } size={ 25 }/>
                    </AppButton>
                    <AppButton  buttonStyle={ styles.save_button }
                                textStyle={ styles.text }
                                onPress={ saveHandler }
                    >
                        <AntDesign name={ 'save' } size={ 25 }/>
                    </AppButton>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal_window: {
        backgroundColor: THEME.FONT_COLOR,
        shadowColor: '#000000',
        shadowRadius: 20,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 20,
            height: 20
        },
        elevation: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    input_field: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input_field_header: {
        fontSize: 26,
        color: THEME.BLACK_COLOR
    },
    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        marginVertical: 20
    },
    buttons_container: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cancel_button: {
        width: '45%',
        backgroundColor: THEME.RED_COLOR
    },
    save_button: {
        width: '45%',
        backgroundColor: THEME.MAIN_COLOR
    },
    text: {
        color: THEME.FONT_COLOR,
        fontSize: 16
    }
});