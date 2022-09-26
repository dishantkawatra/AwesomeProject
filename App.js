import React, { useEffect } from "react";
import { Provider } from "react-redux";
import RootNavigator from "./src/rootNavigator/rootNavigator";
import configureStore from "./src/redux/store/store";
import { Alert } from "react-native";
const store = configureStore();
function App() {
  Alert.alert(JSON.stringify(store))
  
  return (
 <Provider store={store}>
 <RootNavigator/>
</Provider>
   
  );
};

export default App;