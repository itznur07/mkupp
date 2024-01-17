import { AntDesign, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Modal, Pressable, Text, TextInput, View, useWindowDimensions } from 'react-native';
import SearchBar from '../../components/SearchBar';
import TopBar from '../../components/TopBar';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const { width, height } = useWindowDimensions();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={{ backgroundColor: '#171719', height: '100%', paddingHorizontal: 20 }}>
      <TopBar />
      {/* headline */}
      <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>Be Productive today!</Text>
      {/* search bar */}
      <SearchBar />
      {/* add task button */}
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 24,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          backgroundColor: 'dodgerblue',
          paddingVertical: 14,
          marginHorizontal: 24,
          borderRadius: 10,
        }}>
        <Text style={{ fontWeight: '500', color: 'white', fontSize: 16 }}>Add new task</Text>
        <Entypo name="plus" size={18} color="white" />
      </Pressable>
      {/* open modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            height: 500,
            margin: 20,
            marginTop: height / 6,
            backgroundColor: 'white',
            backgroundBlendMode: 'dark',
            borderRadius: 14,
            padding: 35,
            shadowColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 14,
            shadowRadius: 5,
            elevation: 21,
          }}>
          {/* close button start */}
          <Pressable
            style={{ position: 'absolute', right: 10, top: 10 }}
            onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign name="closecircleo" size={24} color="black" />
          </Pressable>
          {/* close button end */}

          {/* task form start */}
          <View>
            {/** Name */}
            <View>
              <Text>Task Heading</Text>
              <Controller
                control={control}
                name="name"
                rules={{ required: 'Name is required' }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={{
                      borderWidth: 0.5,
                      paddingVertical: 8,
                      paddingHorizontal: 14,
                      marginTop: 10,
                      outline: 'none',
                      borderRadius: 5,
                    }}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="Your full name"
                  />
                )}
              />
              {errors.name && (
                <Text style={{ color: 'red', marginTop: 2 }}>{errors.name.message as any}</Text>
              )}
            </View>
            {/** Name End */}
          </View>
          {/* task form end */}
        </View>
      </Modal>

      <StatusBar style="light" />
    </View>
  );
}
