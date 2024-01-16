import { Ionicons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const TopBar = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Octicons name="apps" size={24} color="white" />
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
