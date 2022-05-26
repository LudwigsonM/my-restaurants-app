import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/Home';
import { View } from 'react-native';
import styles from './src/styles';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <View style={styles.container}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        <StatusBar style="auto" />
    </View>
  </NavigationContainer>
  );
}
