import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import SizedBox from './src/components/SizedBox';

const useStyles = () => {
  return StyleSheet.create({
    root: {
      backgroundColor: '#ffffff',
      flex: 1,
    },

    safeAreaView: {
      flex: 1
    },

    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },

    img: {
      height: 35,
      width: 150,
      alignItems: 'center',
    },

    title: {
      color: '#000',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 34,
    },

    subtitle: {
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 20,
    },

    form: {
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },

    label: {
      // color: 'rgba(235, 235, 245, 0.6)',
      color: 'black',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: 80,
    },

    btn: {
      borderRadius: 8,
      backgroundColor: 'rgb(93, 95, 222)',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center'
    },

    btnTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
    },

    textInput: {
      color: 'black',
      flex: 1,
      borderRadius: 0,
    },

    forgotpass: {
      alignItems: 'flex-end',
    },

    textButton: {
      color: '#FFFFFF',
      flex: 1,
    },

  });
}

const App: React.FC = () => {
  const styles = useStyles();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSubmit = () => {
    console.log(input1, input2);
  }

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >
          <View>
            <Image
              source={require('./img/Logo.png')}
              style={styles.img}
            />
          </View>

          <SizedBox height={8} />

          <Text style={styles.title}>Welcome back!</Text>

          <SizedBox height={8} />

          <Text style={styles.subtitle}>Sign in</Text>

          <SizedBox height={8} />

          <Pressable>
            <View style={styles.form}>
              {/* <Text style={styles.label}>Email</Text> */}

              <TextInput
                autoCapitalize='none'
                autoCompleteType='email'
                autoCorrect={false}
                KeyboardType='email-address'
                returnKeyType='next'
                style={styles.textInput}
                textContentType='Username'
                placeholder='Username'
              />
            </View>
          </Pressable>

          <SizedBox height={16} />
          <Pressable>
            <View style={styles.form}>
              {/* <Text style={styles.label}>Password</Text> */}

              <TextInput
                autoCapitalize='none'
                autoCompleteType='password'
                autoCorrect={false}
                KeyboardType='email-address'
                returnKeyType='next'
                style={styles.textInput}
                textContentType='Password'
                placeholder='Password'
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <View style={styles.forgotpass}>
            <Text style={styles.textButton}>
              Forgot password?
            </Text>
          </View>

          <SizedBox height={16} />

          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btnTitle}>Continue</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default App;