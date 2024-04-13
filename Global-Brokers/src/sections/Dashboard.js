import React from 'react';
import { ScrollView, Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CardItem from '../components/CountryItem';
import { infoPaises } from '../utils/index';

export default function Dashboard() {
  return (
    <Animated.View className='mt-8 mb-4' entering={FadeInDown.duration(500).springify().delay(200)}>
      <Text
        style={{
          fontFamily: 'rethinkSansBold',
        }}
        className='text-3xl mb-4 dark:text-white'
      >
        Paises
      </Text>

      <ScrollView horizontal className='space-x-5' showsHorizontalScrollIndicator={false}>
        {infoPaises.map((item) => (
          <CardItem
            key={item.id}
            pais={item.pais}
            totalInversion={item.totalInversion}
            accionPopular={item.accionPopular}
            numeroUsuarios={item.numeroUsuarios}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
}
