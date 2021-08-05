import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="HomeScreen" 
                            component={HomeScreen} 
                            options={{
                              headerShown: false,
                            }}
                        />
                        <Stack.Screen 
                            name="MapScreen" 
                            component={MapScreen} 
                            options={{
                              headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});