import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    CreateFindRoom: undefined;
    CreateRoomForm: undefined;
  };
  
  
type CreateRoomFormNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateRoomForm'>;


const CreateFindRoomScreen: React.FC = () => {
  const navigation = useNavigation<CreateRoomFormNavigationProp>();

  const [createForm, setCreateForm] = useState({
    roomName: '',
    password: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const mockRooms = [
    { id: '1', name: 'March Madness 2024' },
    { id: '2', name: 'Final Four Frenzy' },
    { id: '3', name: 'Sweet 16 Showdown' },
    { id: '4', name: 'March Madness 2024' },
    { id: '5', name: 'Final Four Frenzy' },
    { id: '6', name: 'Sweet 16 Showdown' },
  ];

  const renderRoomItem = ({ item }: { item: { id: string, name: string } }) => (
    <TouchableOpacity style={styles.roomItem}>
      <Text style={styles.roomName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const ListHeaderComponent = () => (
    <>
      <Text style={styles.title}>Create or Find a Room</Text>

      <View style={styles.section}>
        {/* <Text style={styles.sectionTitle}>Create Room</Text>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Room Name</Text>
          <TextInput
            style={styles.inputControl}
            value={createForm.roomName}
            onChangeText={(text) => setCreateForm({ ...createForm, roomName: text })}
            placeholder="Enter room name"
            placeholderTextColor="#6b7280"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password (Optional)</Text>
          <TextInput
            style={styles.inputControl}
            value={createForm.password}
            onChangeText={(text) => setCreateForm({ ...createForm, password: text })}
            placeholder="Enter password"
            placeholderTextColor="#6b7280"
            secureTextEntry
          />
        </View> */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('CreateRoomForm');
          }}
        >
          <Text style={styles.btnText}>Create Room</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find Room</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputControl}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search for a room"
            placeholderTextColor="#6b7280"
          />
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={mockRooms}
        renderItem={renderRoomItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
    marginTop: 16,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  roomItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D2A32',
  },
});

export default CreateFindRoomScreen;