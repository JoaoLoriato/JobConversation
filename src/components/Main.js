import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Chats from './Chats';
import Contacts from './Contacts';
import Tasks from './Tasks';

export default class Main extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CHATS' },
      { key: 'second', title: 'CONTACTS' },
      { key: 'third', title: 'TASKS'},
    ],
  };

  renderTabBar = props => <TabBarMenu {...props} />

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Chats,
          second: Contacts,
          third: Tasks,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});