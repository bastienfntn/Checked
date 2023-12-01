/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isHomePage, setIsHomePage] = useState(true);

  const handlePress = () => {
    setIsHomePage(!isHomePage);
  };

  return (
    <SafeAreaView
      style={[
        isHomePage ? styles.containerTitle : styles.containerApp,
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      ]}>
      {isHomePage && <HomePage onPress={handlePress} />}
      {!isHomePage && <TasksPage />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  containerApp: {
    flex: 1,
  },
  TodoTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
  },
});

export default App;
