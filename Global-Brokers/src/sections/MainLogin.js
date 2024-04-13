import { useColorScheme } from 'nativewind';
import React from 'react';
import { Text, TextInput } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function MainLogin() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Animated.View className='mt-8' entering={FadeInDown.duration(500).springify().delay(300)}>
      {/* Title */}
      <Text
        className='text-3xl dark:text-white mb-4'
        style={{
          fontFamily: 'tiltNeon',
        }}
      >
        Global Brokers
      </Text>

      <TextInput
        className='text-3xl dark:text-white mb-4'
        editable
        multiline
        numberOfLines={1}
        maxLength={40}
        // onChangeText={(text) => onChangeText(text)}
        value={'Usuario'}
        style={{ padding: 10 }}
      />
      <TextInput
        className='text-3xl dark:text-white mb-4'
        editable
        multiline
        numberOfLines={1}
        secureTextEntry={true}
        maxLength={40}
        // onChangeText={(text) => onChangeText(text)}
        value={'ABC'}
        style={{ padding: 10 }}
      />
    </Animated.View>
  );
}
