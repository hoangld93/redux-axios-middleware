import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { listRepos, listReposSuccess, listReposFailed } from '../reducer/HomeReducer';
import styles from '../style/RepoListStyle';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('relferreira')
      .then((response) => this.props.listReposSuccess(response))
      .catch((err) => this.props.listReposFailed(err))
  }
  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { repos, error, loading } = this.props;
    console.log(repos)
    console.log("List Error", error)
    console.log("List is loading...", loading)

    if (loading) return (
      <SafeAreaView>
        <Text>loading...</Text>
      </SafeAreaView>
    );

    if (error) return (
      <SafeAreaView style={styles.container}>
        <Text>{error.toString()}</Text>
      </SafeAreaView>
    );

    return (
      <SafeAreaView styles={styles.container}>
        <FlatList
          data={repos}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

    );
  }
}

const mapStateToProps = state => {
  // let storedRepositories = repos;
  return {
    repos: state.home.repos,
    loading: state.home.loading,
    error: state.home.error,
  };
};

const mapDispatchToProps = {
  listRepos,
  listReposSuccess,
  listReposFailed
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);