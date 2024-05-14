import { useColorScheme } from 'nativewind';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MainLogin() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className='mt-20 '>

      {/* Title */}
      <Text
        className='text-3xl dark:text-white mb-4 flex-row justify-between text-center'
        style={{
          fontFamily: 'tiltNeon',
          padding: 30
        }}
      >
        Global Brokers
      </Text>

      <View>
        
      <TextInput
        className='text-3xl dark:text-white mb-4 text-center'
        editable
        multiline
        numberOfLines={1}
        maxLength={40}

        // onChangeText={(text) => onChangeText(text)}
        // value={'Usuario'}
        style={{ padding: 10 }}
      />

      </View>  
      <View>

      <TextInput
        className='text-3xl dark:text-white mb-4 text-center'
        editable
        multiline
        numberOfLines={1}
        secureTextEntry={true}
        maxLength={40}
        // onChangeText={(text) => onChangeText(text)}
        // value={'ABC'}
        style={{ padding: 10 }}
      />

      </View>
    </View>
  );

  const style = StyleSheet.create({ 
    baseText:{
      borderBottomWith: 12,
      borderBottomColor: "black" 
    }
  })
}
