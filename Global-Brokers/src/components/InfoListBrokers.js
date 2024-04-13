import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function InfoListBrokers({ nombreBroker, paisesOperativos, totalUsuarios, imageSource }) {
  return (
    <View
      className='rounded-3xl py-8 px-4 justify-between flex-row items-center bg-[#e5e5e5] shadow-sm'
      style={{
        width: '100%',
        maxWidth: width,
        height: height * 0.12,
      }}
    >
      <View className='flex-row space-x-6 items-center justify-center'>
        <View className='bg-white rounded-xl'>
          <Image
            source={imageSource}
            style={{
              width: 65,
              height: 65,
            }}
            resizeMode='contain'
          />
        </View>

        <View className='space-y-1'>
          {/* Name */}
          <Text
            className='text-2xl'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {nombreBroker}
          </Text>

          {/* Type */}
          <Text
            className='text-sm text-neutral-500'
            style={{
              fontFamily: 'rethinkSans',
            }}
          >
            {paisesOperativos}
          </Text>
          <View className='space-y-1'>
            {/* Type */}
            <Text
              className='text-sm text-neutral-500'
              style={{
                fontFamily: 'rethinkSans',
              }}
            >
              {'Total de usuarios: ' + totalUsuarios}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
