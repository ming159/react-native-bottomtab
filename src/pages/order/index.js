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

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Order</Text>
        <Icon name="car" size={30} color="#009" />
        <Button
            title="Go to OrderDetail"
            onPress={() => this.props.navigation.navigate('OrderDetail')}
        />
      </View>
    );
  }
}

export default Order;
