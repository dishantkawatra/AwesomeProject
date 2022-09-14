/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { Switch} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {
  Button,
  StyleSheet,
  Image,
  navigation,
  TextInput,
  Text,
  View,
} from 'react-native';



export default function FirstScreen()
{
  const titleText = "Bird's dsads"
  const baseText = "This is base "
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();
  const [switchValue, setSwitchValue] = useState(false);
 
  const toggleSwitch2 = (value) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };
return (


  <View style={[styles.container, {
    // Try setting `flexDirection` to `"row"`.
    flexDirection: "column"
  }]}>
    <View style={{ flex: 2, backgroundColor: "red" }}>

    <Text style={styles.baseText}>{baseText}</Text>
  <Text style={styles.titleText}>{titleText}</Text>

    </View>
   
    
    <View style={{ flex: 3, backgroundColor: "darkorange" }}>
    <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />


      {/*  Button  */}

      
      <Button
       title='Press Me' 
       onPress={() =>   navigation.navigate('SecondScreen', { name: 'Jane' })}
       style={{
        backgroundColor:'green',
        fontSize: 22,
        fontWeight: 'bold'
       }}>

      </Button>


        {/* First Switch  */}

    <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      {/* Second Switch */}

       <Switch
          style={{marginTop: 100}}
          onValueChange={toggleSwitch2}
          value={switchValue}
/>
      

    </View>
    
   
        <View style={{ flex: 2, backgroundColor: "green" }}>
       {/* Input TextView */}

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="placeholder"
        keyboardType="numeric"
      />

        </View>
  </View>


 )

}




const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontSize:30
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 5,
    padding: 0,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

