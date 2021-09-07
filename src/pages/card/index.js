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

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Card</Text>
        <Icon name="shoppingcart" size={30} color="#409EFF" />
        <Button
            title="Go to CardDetail"
            onPress={() => this.props.navigation.navigate('CardDetail')}
        />
      </View>
    );
  }
}

export default Card;
