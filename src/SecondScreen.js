/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from "react";
 import {
   FlatList,
   StyleSheet,
   StatusBar,
   Text,
   View,
 } from 'react-native';

 const flatListdata = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
 
 

 
 export default function SecondScreen()
 {

  const renderItem = ({ item }) => (
    // <Item title={item.title} />
    <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={{color:'white'}}>{item.id}</Text>
  </View>
  );

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  
   return(
    <View style={styles.container}>
       <FlatList
       style={{flexGrow:1,backgroundColor:'black'}}
       renderItem={renderItem}
       data={flatListdata}
       keyExtractor={item => item.id}>
      
       
       </FlatList>
    </View>


   )
 
 
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'red',
    padding: 5,
    marginTop:10,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
    color:"white"
  },
});


 
 
 