import * as React from 'react';
import {StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import routes from '../../route';

import Icon from 'react-native-vector-icons/AntDesign';
import TabBar from '../tabBar';

let trans = {};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === 'TabBar'? false : true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="TabBar" component={TabBar} options={trans} />
      {routes.pageRoutes.map((item, index) => {
          return (
            <Stack.Screen name={item.path} component={item.component} key={index}
            options={{
                title: ({ focused, color, size=18 }) => {
                    return <Text style={{fontSize: size,color: color}}>{item.name}</Text>
                },
                headerTitle: ({ focused, color, size=18 }) => {
                    return <Text style={{fontSize: size,color: color}}>{item.name}</Text>
                },
                headerBackImage: ({focused, color, size}) => {
                    return <Icon name="left" size={23} color={color} />;
                },
            }}
            />
          )
      })}
    </Stack.Navigator>
  );
}

export default class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <NavigationContainer>
              <MyStack />
            </NavigationContainer>
        );
    }
}
