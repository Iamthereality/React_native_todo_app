import React from 'react';
import { TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform, View } from 'react-native';

import { AppTextThin } from './AppTextThin';
import { THEME } from "../../Theme";

export const AppButton = ({ buttonStyle, textStyle, onPress, children }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <View style={ { ...styles.button, ...buttonStyle } }>
            <Wrapper activeOpacity={ 0.7 }
                     onPress={ onPress }
                     background={TouchableNativeFeedback.Ripple(THEME.FONT_COLOR, true)}
            >
                <View style={ { ...styles.button, ...buttonStyle, width: '100%' } }>
                    <AppTextThin style={ textStyle }>
                        { children }
                    </AppTextThin>
                </View>
            </Wrapper>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: THEME.MAIN_COLOR,
        flexDirection: 'row',
        borderRadius: 50,
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
});