import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppText = (props) => {
    return (
        <Text s>
            { props.children }
        </Text>
    );
};