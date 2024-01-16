import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        style={{
          color: '#fff',
          marginTop: 24,
          paddingVertical: 10,
          paddingHorizontal: 24,
          backgroundColor: '#272728',
          borderRadius: 10,
        }}
        placeholderTextColor={'#fff'}
        placeholder="Search task"
      />
      <Feather
        style={{ position: 'absolute', top: 35, right: 15 }}
        name="search"
        size={24}
        color="#fff"
      />
    </View>
  );
};

export default SearchBar;
