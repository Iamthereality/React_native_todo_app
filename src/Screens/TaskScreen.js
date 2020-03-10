import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../Theme';
import { AppCard } from '../Components/UI/AppCard'
import { EditTaskModalWindow } from "../Components/EditTaskModalWindow";

export const TaskScreen = ({ backToTasksList, task, removeTask, onSave }) => {
    const [modalWindow, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(task.id, title);
        setModal(false);
    }

    return (
        <View style={ styles.task_details }>
            <EditTaskModalWindow  visibility={ modalWindow }
                                  onCancel={ () => setModal(false) }
                                  value={ task.title }
                                  onSave={ saveHandler }
            />
            <AppCard>
                <View style={ styles.task_title }>
                    <Text style={ styles.title }>
                        { task.title }
                    </Text>
                    <TouchableOpacity style={ styles.edit_button }
                                      onPress={ () => setModal(true) }
                                      activeOpacity={ 0.7 }
                    >
                        <Text style={ styles.text }>
                            { 'Edit' }
                        </Text>
                    </TouchableOpacity>
                </View>
            </AppCard>
            <View style={ styles.buttons_container }>
                <TouchableOpacity style={ styles.back_button }
                                  onPress={ () => backToTasksList(null) }
                                  activeOpacity={ 0.7 }
                >
                    <Text style={ styles.text }>
                        { 'Back' }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.clear_button }
                                  onPress={ () => {
                                      removeTask(task.id);
                                  } }
                                  activeOpacity={ 0.7 }
                >
                    <Text style={ styles.text }>
                        { 'Delete' }
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const button = {
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
};

const styles = StyleSheet.create({
    task_details: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    task_title: {
        width: '100%',
        flexDirection: 'row',
        padding: 10
    },
    title: {
        width: '70%',
        fontSize: 24,
        marginRight: 5
    },
    buttons_container: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    back_button: {
        width: '45%',
        backgroundColor: THEME.GRAY_COLOR,
        ...button
    },
    clear_button: {
        width: '45%',
        backgroundColor: THEME.RED_COLOR,
        ...button
    },
    edit_button: {
        width: '30%',
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

