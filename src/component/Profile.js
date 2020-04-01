import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../reducer/reducer';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };
  componentDidMount() {
    this.props.getUser('relferreira');
  }

  render() {
    const { user, loadingProfile } = this.props;
    console.log("Loading profile", loadingProfile)
    if (loadingProfile) return <Text>Loading...</Text>;

    const { name, login } = user;
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text style={{alignItems:'center'}}>Name: {name}</Text>
        <Text>Login: {login}</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.temp.user,
  loadingProfile: state.temp.loadingProfile
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);