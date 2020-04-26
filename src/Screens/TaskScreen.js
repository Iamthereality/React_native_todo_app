import React, { useState, useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { THEME } from '../Theme';
import { AppCard } from '../Components/UI/AppCard'
import { EditTaskModalWindow } from "../Components/EditTaskModalWindow";
import { AppTextRegular } from "../Components/UI/AppTextRegular";
import { AppButton } from '../Components/UI/AppButton';

import { TasksContext } from "../Context/Tasks/TasksContext";
import { ScreenContext } from "../Context/Screen/ScreenContext";

export const TaskScreen = () => {
    const [modalWindow, setModal] = useState(false);
    const { taskID, changeScreen } = useContext(ScreenContext);
    const { tasks, updateTask, removeTask } = useContext(TasksContext);

    const task = tasks.find((task) => task.id === taskID);

    const saveHandler = async (title) => {
        await updateTask(task.id, title);
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
                           onPress={ () => changeScreen(null) }
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
        width: '60%',
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
        width: Dimensions.get('window').width / 2.35,
        backgroundColor: THEME.GRAY_COLOR
    },
    clear_button: {
        width: Dimensions.get('window').width / 2.35,
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

