import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TutorialListView from './components/TutorialListView';
import TutorialSectionList from './components/TutorialSectionList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TutorialListView />
        <TutorialSectionList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
