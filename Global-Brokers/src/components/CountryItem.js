import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CountryItem({ pais, totalInversion, accionPopular, numeroUsuarios, backgroundColor }) {
  return (
    <TouchableOpacity className='mr-3'>
      <View
        className='rounded-3xl py-4 px-4 justify-between'
        style={{
          width: width * 0.4,
          height: height * 0.28,
          backgroundColor: '#0D3D56',
        }}
      >
        <View className='space-y-2'>
          <Text
            className='text-1g text-white'
            style={{
              fontFamily: 'rethinkSansBold',
            }}
          >
            {pais}
          </Text>
        </View>

        <View className='space-y-2'>
          <Text
            className='text-0.5g text-white'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {'Total de Inversion: ' + totalInversion}
          </Text>

          <Text
            className='font-medium text-0.5g text-white'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {'Accion mas popular: ' + accionPopular}
          </Text>
        </View>

        <View className='space-y-2'>

          <Text
            className='font-medium text-0.5g text-white'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {'Numero total de usuarios: ' + numeroUsuarios}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
