import { useColorScheme } from 'nativewind';
import React from 'react';
import { Switch, View } from 'react-native';
import { BellIcon } from 'react-native-heroicons/solid';

export default function HeaderLogin() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className='flex-row justify-between items-right'>
      <BellIcon size={30} strokeWidth={2} color={colorScheme == 'dark' ? 'white' : 'black'} />
      <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
    </View>
  );
}
