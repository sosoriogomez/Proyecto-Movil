import React from 'react';
import { Dimensions, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function InfoUserStocks({ nombre, precio, numAcciones, inversionTotal}) {
  return (
    <View
      className=' py-8 px-4 justify-between flex-row items-center bg-[#e5e5e5] shadow-sm'
      style={{
        width: '100%',
        maxWidth: width,
        height: height * 0.12,
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
            {"Nombre: " + nombre}
          </Text>

          {/* Type */}
          <Text
            className='text-sm text-neutral-500'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {precio}
          </Text>
          <View className='space-y-1'>
            {/* Type */}
            <Text
              className='text-sm text-neutral-500'
              style={{
                fontFamily: 'rethinkSans',
              }}
            >
              {"Número de acciones compradas: " + numAcciones}
            </Text>
          </View>
          <View className='space-y-1'>
            {/* Type */}
            <Text
              className='text-sm text-neutral-500'
              style={{
                fontFamily: 'rethinkSans',
              }}
            >
              {"Inversion Total: " + inversionTotal}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
