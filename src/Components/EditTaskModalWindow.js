import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, TouchableOpacity, Text, Alert } from 'react-native';
import { THEME } from "../Theme";

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
        }
    };

    return (
        <Modal visible={ visibility }
               animationtype={ 'slide' }
               transparent={ true }
        >
            <View style={ styles.modal_window }>
                <View style={ styles.input_field }>
                    <Text style={ styles.input_field_header }>
                        { 'Change the task title:' }
                    </Text>
                    <TextInput style={ styles.input }
                               autoCapitalize={ 'none' }
                               autocorrect={ 'false' }
                               value={ title }
                               onChangeText={ setTitle }
                    />
                </View>
                <View style={ styles.buttons_container }>
                    <TouchableOpacity style={ styles.cancel_button }
                                      onPress={ onCancel }
                                      activeOpacity={ 0.7 }
                    >
                        <Text style={ styles.text }>
                            { 'Cancel' }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.save_button }
                                      onPress={ saveHandler }
                                      activeOpacity={ 0.7 }
                    >
                        <Text style={ styles.text }>
                            { 'Save' }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const button = {
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
};

const styles = StyleSheet.create({
    modal_window: {
        backgroundColor: THEME.FONT_COLOR,
        marginVertical: 10,
        marginHorizontal: 10,
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
        fontSize: 20
    },
    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
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
        backgroundColor: THEME.RED_COLOR,
        ...button
    },
    save_button: {
        width: '45%',
        backgroundColor: THEME.MAIN_COLOR,
        ...button
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        color: THEME.FONT_COLOR,
        fontSize: 16
    }
});