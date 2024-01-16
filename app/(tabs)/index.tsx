import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import TopBar from '../../components/TopBar';
import ModalScreen from '../modal';
export default function Home() {
  return (
    <View style={{ backgroundColor: '#171719', height: '100%', paddingHorizontal: 20 }}>
      <TopBar />
      {/* headline */}
      <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>Be Productive today!</Text>
      {/* search bar */}
      <SearchBar />
      {/* add task button */}
      <Pressable
        onPress={() => <ModalScreen />}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 24,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
          backgroundColor: 'dodgerblue',
          paddingVertical: 14,
          marginHorizontal: 24,
          borderRadius: 10,
        }}>
        <Text style={{ fontWeight: '500', color: 'white', fontSize: 16 }}>Add new task</Text>
        <Entypo name="plus" size={24} color="white" />
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}
