import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const App = () => {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={{
          width,
          height: 100,
          justifyContent: 'center',
          backgroundColor: '#00bcd2',
          marginBottom: 10,
          borderRadius: 10,
        }}></Animated.View>
      <Button title="Add with" onPress={handlePress} />
      <TouchableOpacity
        onPress={() => (width.value = withSpring(width.value - 50))}
        style={{
          backgroundColor: '#00bcd2',
          height: 40,
          marginTop: 20,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
        }}>
        <Text style={{color: 'white'}}>Remo width</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
