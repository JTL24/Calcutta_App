import React, { useState } from 'react';
import { commonStyles } from '../styles/commonStyles';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login } from '../api/auth';

type RootStackParamList = {
  Login: undefined;
  CreateFindRoom: undefined;
};


type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () =>{
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={commonStyles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={require('../components/imgs/cutta_icon.png')} />

            <Text style={commonStyles.title}>
              Sign in to <Text style={{ color: '#075eec' }}>Cutta</Text>
            </Text>

            <Text style={styles.subtitle}>
              March Madness Auctions!
            </Text>
          </View>

          <View style={styles.form}>
            <View style={commonStyles.input}>
              <Text style={commonStyles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={commonStyles.inputControl}
                value={form.email} />
            </View>

            <View style={commonStyles.input}>
              <Text style={commonStyles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={commonStyles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    console.log('Attempting login with:', form.email);
                    const result = await login(form.email, form.password);
                    console.log('Login successful', result);
                    // Store the token in secure storage (e.g., AsyncStorage or SecureStore)
                    // AsyncStorage.setItem('userToken', result.token);
                    navigation.navigate('CreateFindRoom');
                  } catch (error) {
                    console.error('Login failed', error);
                    // Show error message to user
                    // You can use a state variable to display the error message in the UI
                  }


                }}>
                <View style={commonStyles.btn}>
                  <Text style={commonStyles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.formLink}>Forgot password?</Text>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            // handle link
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Don't have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
});

export default LoginScreen; 