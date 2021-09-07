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

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CardDetail</Text>
        <Icon name="shoppingcart" size={60} color="#409EFF" />
        <Button
            title="Go to Cardlist"
            onPress={() => this.props.navigation.navigate('CardList')}
        />
      </View>
    );
  }
}

export default CardDetail;
