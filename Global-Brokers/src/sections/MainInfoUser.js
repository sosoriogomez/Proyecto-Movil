import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { infoUser } from '../utils';

const { width, height } = Dimensions.get('window');

export default function MainInfoUser() {
  const [data, setData] = useState(infoUser);
  return (
    <TouchableOpacity className='mr-3'>
      <View
        className='rounded-3xl py-9 px-5 justify-between mt-5'
        style={{
          width: width * 0.9,
          height: height * 0.22,
          backgroundColor: 'darkblue',
        }}
      >
        <View className='space-y-2'>
          <Text
            className='text-4xl text-white'
            style={{
              fontFamily: 'rethinkSansBold',
            }}
          >
            {data.nombreUsuario}
          </Text>
        </View>
        <View className='space-y-1'>
          <Text
            className='text-xl text-white'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {data.nombrePais}
          </Text>

          <Text
            className='font-medium text-0.5g text-white'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {data.saldo}
          </Text>
        </View>

        <View className='space-y-2'>

          <Text
            className='font-medium text-0.5g text-white'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {data.correo}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
