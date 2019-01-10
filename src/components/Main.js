import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const Chats = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);
const Contacts = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);
const Tasks = () => (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

export default class Main extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CHATS' },
      { key: 'second', title: 'CONTACTS' },
      { key: 'third', title: 'TASKS'},
    ],
  };

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