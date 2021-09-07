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

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>OrderDetail</Text>
        <Icon name="shoppingcart" size={60} color="#409EFF" />
        <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default OrderDetail;
