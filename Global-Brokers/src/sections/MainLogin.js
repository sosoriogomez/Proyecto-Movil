import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { React, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
const logo = require('../../assets/logo.png');

export default function MainLogin() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { password, setPassword } = useState('');
  const navigation = useNavigation();
  return (
    <View className='p-6 flex justify-center items-center'>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      {/* Title */}
      <Text
        className='text-3xl dark:text-white mb-4 flex-row justify-between text-center'
        style={{
          fontFamily: 'tiltNeon',
          padding: 30,
        }}
      >
        Global Brokers
      </Text>

      <View style={styles.inputView}>
        <TextInput
          className='text-3xl dark:text-white mb-4 text-center'
          editable
          singleline
          placeholder='Usuario'
          numberOfLines={1}
          maxLength={40}
          // onChangeText={(text) => onChangeText(text)}
          // value={'Usuario'}
          style={styles.input}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          className='text-3xl dark:text-white mb-4 text-center'
          editable
          singleline
          numberOfLines={1}
          placeholder='PASSWORD'
          secureTextEntry
          value={password}
          maxLength={40}
          // onChangeText={(text) => onChangeText(text)}
          // value={'ABC'}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Usuarios')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'indigo',
    borderWidth: 1,
    borderRadius: 7,
  },
  image: {
    height: 160,
    width: 170,
  },
  button: {
    backgroundColor: 'indigo',
    height: 45,
    borderColor: 'indigo',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
  },
});
