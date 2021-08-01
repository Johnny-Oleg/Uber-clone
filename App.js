import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store} />
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
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
