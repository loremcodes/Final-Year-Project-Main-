import {StatusBar} from 'expo-status-bar';
// by paddy -- import button
import {Button} from 'react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello floks</Text>
            <Button className='btn' title="Click me"/>
            // I have put a comment
            // Changed another line
			// form fleet
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
        fontSize: '100px',
    },
    btn: {
        border: '2px',
        color: 'red',
    }
});
