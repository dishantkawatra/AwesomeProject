import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


export default ThirdScreenApiHit = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  // const items= useSelector(state=>state.Reduc)
  const items = useSelector((state) => state.AddItemReducer);


  useEffect(() => {
    Alert.alert(JSON.stringify(items))
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
        )}
    </View>
  );
};