import React, { Component } from 'react';
import { StyleSheet, Text, View, Settings } from 'react-native';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../src/component/HomeComponent'
import RepoDetail from '../src/component/RepoDetail';
import RootReducers from '../src/reducer/RootReducer';
import reducer from '../src/reducer/reducer';
import HomeReducer from '../src/reducer/HomeReducer';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

// const rootReducer = combineReducers({reducer, HomeReducer});

const store = createStore(RootReducers, applyMiddleware(axiosMiddleware(client)));

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator headerMode='screen'>
              <Stack.Screen name="Home" component={HomeComponent}/>
              <Stack.Screen name="Detail" component={RepoDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});