import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../SecondScreen';
import FirstScreen from '../FirstScreen';
import ThirdScreenApiHit from '../ThirdScreenApiHit';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen" 
          component={FirstScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreenApiHit" component={ThirdScreenApiHit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigator