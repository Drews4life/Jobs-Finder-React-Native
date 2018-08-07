import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderButton = (props) => (
    <TouchableOpacity style={styles.buttonWrapper} {...props}>
        <Text style={styles.txt}>{props.children}</Text>
    </TouchableOpacity>
)

export default HeaderButton;

const styles = StyleSheet.create({
    txt: {
        fontWeight: 'bold',
        fontSize: 13
    },
    buttonWrapper: {
        paddingRight: 15
    }
});