/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { useDispatch } from "react-redux";
import { addItemToCart } from "./redux/actions/Action";

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

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d52',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29472',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e24d72',
    title: 'Nineth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e23d72',
    title: 'Tenth Item',
  },
];




export default function SecondScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function addItem(item) {
    const user = {name: "Dishant",rollno:"hello"}
    dispatch(addItemToCart(user));
    navigation.navigate('ThirdScreenApiHit')

  }




  function actionOnRow(item, index) {
    //navigation.goBack()
    navigation.navigate('ThirdScreenApiHit')
  }

  const Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => addItem(item, index)}>
      <View style={[styles.item, { backgroundColor: 'yellow' }]}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>

  );



  return (
    <View style={styles.container}>


      <FlatList
        style={{ flexGrow: 1, backgroundColor: 'black' }}
        renderItem={Item}
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
    marginTop: 10,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
    color: "white"
  },
});




