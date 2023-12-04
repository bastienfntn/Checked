/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

function App(): JSX.Element {
  const [isHomePage, setIsHomePage] = useState(true);

  const handlePress = () => {
    setIsHomePage(!isHomePage);
  };

  return (
    <SafeAreaView
      style={[isHomePage ? styles.containerTitle : styles.containerApp]}>
      {isHomePage && <HomePage onPress={handlePress} />}
      {!isHomePage && <TasksPage />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerApp: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  TodoTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
  },
});

export default App;
