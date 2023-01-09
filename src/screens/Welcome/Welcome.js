import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles'

let WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/Synchronize.png')} />
                <View style={styles.subTitle}>
                    <Text style={styles.subText}>Would you like to reach your</Text>
                    <Text style={styles.subText}>destination in the most efficient</Text>
                    <Text style={styles.subText}>manner possible? 🤔</Text>
                </View>

                <View style={styles.title}>
                    <Text style={styles.text}>Let us assist you..! 😄</Text>
                </View>


                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={styles.buttonTitle}
                    >Get Started</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default WelcomeScreen