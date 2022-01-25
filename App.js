/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const ScreenA = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>

      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : 'goldenrod',
        })}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};
const ScreenB = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Screen_A');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : 'goldenrod',
        })}>
        <Text style={styles.text}>Go to Screen A</Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
