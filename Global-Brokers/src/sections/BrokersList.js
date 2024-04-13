import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import InfoListBrokers from '../components/infoListBrokers';
import { listBrokers } from '../utils';

export default function BrokersList() {
  return (
    <Animated.View className='mt-8' entering={FadeInDown.duration(500).springify().delay(300)}>
      {/* Title */}
      <Text
        className='text-3xl dark:text-white mb-4'
        style={{
          fontFamily: 'SpaceGroteskBold',
        }}
      >
        Brokers
      </Text>

      {/* Paises */}

      <FlatList
        data={listBrokers}
        keyExtractor={(item) => item.id}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={false}
        height={400}
        renderItem={({ item }) => <InfoListBrokers {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='h-4' />}
      />
    </Animated.View>
  );
}
