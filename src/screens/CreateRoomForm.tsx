import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const CreateRoomForm: React.FC = () => {
  const [form, setForm] = useState({
    roomName: '',
    password: '',
    budgetLimit: '',
    sportingEvent: 'NCAA March Madness',
    auctionTime: '',
    minBidIncrement: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(form);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create a New Room</Text>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Room Name</Text>
          <TextInput
            style={styles.inputControl}
            value={form.roomName}
            onChangeText={(text) => handleInputChange('roomName', text)}
            placeholder="Enter room name"
            placeholderTextColor="#6b7280"
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password (Optional)</Text>
          <TextInput
            style={styles.inputControl}
            value={form.password}
            onChangeText={(text) => handleInputChange('password', text)}
            placeholder="Enter password"
            placeholderTextColor="#6b7280"
            secureTextEntry
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Users' Budget Limit</Text>
          <TextInput
            style={styles.inputControl}
            value={form.budgetLimit}
            onChangeText={(text) => handleInputChange('budgetLimit', text)}
            placeholder="Enter budget limit"
            placeholderTextColor="#6b7280"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Sporting Event (Only NCAAMB for Now)</Text>
          <TextInput
            style={styles.inputControl}
            value={form.sportingEvent}
            onChangeText={(text) => handleInputChange('sportingEvent', text)}
            placeholder="NCAA March Madness"
            placeholderTextColor="#6b7280"
            editable={false}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Auction Time in Between Bets (seconds)</Text>
          <TextInput
            style={styles.inputControl}
            value={form.auctionTime}
            onChangeText={(text) => handleInputChange('auctionTime', text)}
            placeholder="Enter auction time in seconds"
            placeholderTextColor="#6b7280"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Minimum Bid Increment (Float)</Text>
          <TextInput
            style={styles.inputControl}
            value={form.minBidIncrement}
            onChangeText={(text) => handleInputChange('minBidIncrement', text)}
            placeholder="Enter minimum bid increment"
            placeholderTextColor="#6b7280"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnText}>Create Room</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 24,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CreateRoomForm;