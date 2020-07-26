import React, {Component} from "react"
import { View, StyleSheet, FlatList, Text } from 'react-native';
import {Metrics, Colors, FontStyles} from '../../styles/'
class NotificationListView extends Component {

  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          padding: 16,
          marginLeft: 15,
          marginRight: 10,
          marginVertical: 5,
          backgroundColor: Colors.primaryColors.black,
          height: Metrics.screenHeight * 0.08,
          width: Metrics.screenWidth * 0.82,
          borderRadius: 7.5,
          borderWidth: 1,
          borderColor: Colors.primaryColors.charcoal
        }}>
        <Text style={styles.labelText}>Tribe Notification {item.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.notificationTitleLabel}> TRIBE NOTIFICATIONS</Text>
      <Text style={styles.ViewAllTitleLabel}> VIEW ALL</Text>
        <FlatList
          data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
          renderItem={this._renderItem}
          horizontal={true}
				 ItemSeparatorComponent={() => <View style={{margin: 1}}/>}
        />
      </View>
    );
  }
}

module.exports = NotificationListView

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColors.black,
  },
  notificationTitleLabel: {
    paddingVertical: 5,
    ...FontStyles.generic.bold,
    fontSize: 14,
    color: Colors.primaryColors.gray,
  },
  ViewAllTitleLabel: {
    position: 'absolute',
    right: 5,
    paddingVertical: 5,
    ...FontStyles.generic.bold,
    fontSize: 12,
    color: Colors.primaryColors.powderblue,
  },
  labelText: {
    paddingVertical: 5,
    ...FontStyles.generic.bold,
    fontSize: 14,
    color: Colors.primaryColors.silver,
  },
});