import * as React from 'react';
import {View, Text, StyleSheet,Button,Alert} from 'react-native';
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

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //   Alert.alert(JSON.stringify(this.props.current))
    return (
      <View style={styles.container}>
        <Text style={styles.title}>home</Text>
        <Icon name="QQ" size={30} color="#409EFF" />
        <Button
            title="Go to HomeDetail"
            onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
      </View>
    );
  }
}

export default Home;
