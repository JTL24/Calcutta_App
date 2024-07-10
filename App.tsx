// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CreateFindRoomScreen from './src/screens/CreateFindRoom';
import CreateRoomForm from './src/screens/CreateRoomForm';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options = {{headerShown: false }} />
        <Stack.Screen name="CreateFindRoom" component={CreateFindRoomScreen} options ={{title: 'Create or Find Room'}} />
        <Stack.Screen name="CreateRoomForm" component={CreateRoomForm} options ={{title: 'Create Room Forum'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
