import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RepoList from '../component/RepoListComponent';
import Profile from '../component/Profile';
import ViewPagerComponent from '../component/ViewPagerComponent';

const Tab = createBottomTabNavigator();

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Tab.Navigator headerMode='screen'>
                <Tab.Screen name="Home" component={RepoList} />
                <Tab.Screen name="Profile" component={ViewPagerComponent} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({

});
