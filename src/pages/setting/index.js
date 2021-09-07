import * as React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#409eff',
    fontWeight: 'bold',
  },
});

class Setting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Setting</Text>
        <Icon name="setting" size={50} color="#f00" />
        {/* <Button
            title="Go to goBack"
            onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}

export default Setting;
