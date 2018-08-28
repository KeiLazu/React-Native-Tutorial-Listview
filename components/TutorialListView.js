import React, {
  Component
} from 'react';

import {
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';

export default class TutorialListView extends Component {
  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: "P"},
            {key: "o"},
            {key: "w"},
            {key: "e"},
            {key: "r"}
          ]} 
          renderItem={({item}) => 
            <Text 
              style={styles.item}>
              {item.key}
            </Text>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})