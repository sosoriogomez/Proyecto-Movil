import filter from 'lodash.filter';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, View, Dimensions } from 'react-native';


import Animated, { FadeInDown } from 'react-native-reanimated';
import InfoListUser from '../components/InfoListUser';
import { listUsers } from '../utils';


export default function UsersList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(listUsers);

  const { width, height } = Dimensions.get('window');

  const handleSearch = (query) => {
    console.log(query);
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(listUsers, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = ({ nombreUsuario, pais }, query) => {
    let nombre = nombreUsuario.toLowerCase();
    let lPais = pais.toLowerCase();

    if (nombre.includes(query) || lPais.includes(query)) {
      console.log('incluye');
      return true;
    }
    return false;
  };

  return (
    <Animated.View className='mt-8' entering={FadeInDown.duration(500).springify().delay(300)}>
      {/* Title */}
    <View 
        style={{
          width: width * .9,
          height: height * .9,

        }}>
      <Text
        className='text-3xl dark:text-white mb-4'
        style={{
          fontFamily: 'rethinkSansBold',
        }}
      >
        Usuarios
      </Text>
      <TextInput
        className='text-3xl dark:text-white mb-3 .placeholder-green'
        style={{
          fontFamily: 'rethinkSansBold',
        }}
        clearButtonMode='always'
        placeholder='Buscar'
        placeholderTextColor={'grey'}
        editable={true}
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(listUsers) => handleSearch(listUsers)}
      ></TextInput>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={false}
        scrollEnabled={true}
        height={400}
        renderItem={({ item }) => <InfoListUser {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='h-4' />}
      />
    </View>
    </Animated.View>
  );
}
