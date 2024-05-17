import React from 'react';
import { Text, View } from 'react-native';


export default function InfoListUser({ nombreUsuario, pais, saldo }) {
  return (
    <View
      className='rounded-3xl py-8 px-4 justify-between flex-row items-center bg-[#e5e5e5] shadow-sm'
      style={{
        width: '100%',
        
      }}
    >
      <View className='flex-row space-x-6 items-center justify-center'>
        <View className='space-y-1'>
          {/* Name */}
          <Text
            className='text-2xl'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {nombreUsuario}
          </Text>

          {/* Type */}
          <Text
            className='text-sm text-neutral-500'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {pais}
          </Text>
          <View className='space-y-1'>
            {/* Type */}
            <Text
              className='text-sm text-neutral-500'
              style={{
                fontFamily: 'rethinkSans',
              }}
            >
              {'Saldo disponible: ' + saldo}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
