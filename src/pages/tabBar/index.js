import * as React from 'react';
import {StyleSheet,Text,Alert} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import routes from '../../route';

const Tab = createBottomTabNavigator()

class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  filterPath(current, color, size){
    let iconName;
    if (current.path === 'Home') {
      iconName = 'home';
    } else if (current.path === 'Card') {
      iconName = 'shoppingcart';
    } else if (current.path === 'Order') {
      iconName = 'exception1';
    } else {
      iconName = 'user';
    }
    return <Icon name={iconName} size={size} color={color} />;
  }

  render() {
    let self = this;
    return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#409eff',
          tabBarInactiveTintColor: 'gray',
        })}>
        {routes.bottomTabs.map((item, index) => {
          return (
            <Tab.Screen name={item.path} component={item.component} key={index}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return self.filterPath(item, color, size)
              },
              title: ({ focused, color, size }) => {
                return <Text style={{fontSize: size,color: color}}>{item.name}</Text>
              },
              headerTitle: ({ focused, color, size=18 }) => {
                return <Text style={{fontSize: size,color: color}}>{item.name}</Text>
              },
            }}
            />
          )
        })}
    </Tab.Navigator>
    );
  }
}

export default TabBar;
