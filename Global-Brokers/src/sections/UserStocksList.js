import React, { useState } from 'react';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Dimensions } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import InfoUserStocks from '../components/InfoUserStocks';
import { infoUser } from '../utils';

const { width, height } = Dimensions.get('window');

export default function UserStockList() {
  const [data, setData] = useState(infoUser.listAcciones);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Animated.View className='mt-8' entering={FadeInDown.duration(500).springify().delay(300)}>
    <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
      {/* Title */}
    <View 
        style={{
          width: width * 0.9,
          height: height * 0.8,
        }}>
      <Text
        className='text-3xl dark:text-white mb-4'
        style={{
          fontFamily: 'rethinkSansBold',
        }}
      >
      Inventario de Acciones
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={false}
        scrollEnabled={true}
        height={400}
        renderItem={({ item }) => <InfoUserStocks {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='h-4' />}
      />
    </View>
    </Animated.View>
  );

}