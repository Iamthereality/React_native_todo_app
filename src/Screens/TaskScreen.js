import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { THEME } from '../Theme';
import { AppCard } from '../Components/UI/AppCard'
import { EditTaskModalWindow } from "../Components/EditTaskModalWindow";
import { AppTextRegular } from "../Components/UI/AppTextRegular";
import { AppButton } from '../Components/UI/AppButton';

export const TaskScreen = ({ backToTasksList, task, removeTask, onSave }) => {
    const [modalWindow, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(task.id, title);
        setModal(false);
    };

    return (
        <View style={ styles.task_details }>
            <EditTaskModalWindow  visibility={ modalWindow }
                                  onCancel={ () => setModal(false) }
                                  value={ task.title }
                                  onSave={ saveHandler }
            />
            <AppCard>
                <View style={ styles.task_title }>
                    <AppTextRegular style={ styles.title }>
                        { task.title }
                    </AppTextRegular>
                    <AppButton buttonStyle={ styles.edit_button }
                               textStyle={ styles.text }
                               onPress={ () => setModal(true) }
                    >
                        <MaterialCommunityIcons name={ 'circle-edit-outline' } size={ 25 }/>
                    </AppButton>
                </View>
            </AppCard>
            <View style={ styles.buttons_container }>
                <AppButton buttonStyle={ styles.back_button }
                           textStyle={ styles.text }
                           onPress={ () => backToTasksList(null) }
                >
                    <AntDesign name={ 'leftcircleo' } size={ 25 }/>
                </AppButton>
                <AppButton buttonStyle={ styles.clear_button }
                           textStyle={ styles.text }
                           onPress={ () => removeTask(task.id)}
                >
                    <AntDesign name={ 'minuscircleo' } size={ 25 }/>
                </AppButton>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    task_details: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    task_title: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    title: {
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
        backgroundColor: THEME.GRAY_COLOR
    },
    clear_button: {
        width: '45%',
        backgroundColor: THEME.RED_COLOR
    },
    edit_button: {
        backgroundColor: THEME.MAIN_COLOR
    },
    text: {
        color: THEME.FONT_COLOR,
        fontSize: 16
    }
});

