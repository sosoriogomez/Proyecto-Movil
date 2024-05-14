import { useColorScheme } from 'nativewind';
import React from 'react';
import { Image, Switch, View } from 'react-native';
import { BellIcon, LightBulbIcon } from 'react-native-heroicons/solid';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className='flex-row justify-between items-center'>
      <View className='border-2 border-white rounded-full overflow-hidden'>
        <Image
          source={require('../../assets/profile.png')}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>
      <View className='flex-row space-x-4 justify-center items-center'>
        <LightBulbIcon size={30} strokeWidth={2} color={colorScheme == 'dark' ? 'white' : 'black'} />
        <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  );
}
