import React from 'react';
import { TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

import { AppTextThin } from './AppTextThin';
import { THEME } from "../../Theme";

export const AppButton = ({ buttonStyle, textStyle, onPress, children }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper style={ { ...styles.button, ...buttonStyle } }
                          onPress={ onPress }
                          activeOpacity={ 0.7 }
        >
            <AppTextThin style={ textStyle }>
                { children }
            </AppTextThin>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: THEME.MAIN_COLOR,
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});