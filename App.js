import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {//Component를 import 안하면 이렇게 쓴다.
  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Home!</Text>
      </View>
    );
  }
} 

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Settings!</Text>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {Home : HomeScreen, Settings : SettingsScreen},
  {defaultNavigationOptions : ({navigation}) => ({
    tapBarIcon : ({focused, horizontal, tintColor}) => {
      const {routName} = navigation.state;

      let iconName;
      if (routName === "Home"){
        iconName = `ios-information-circle${focused ? '' : '-outline'}`
      }
      else if (routName === "Settings"){
        iconName = `ios-options${focused ? '' : '-outline'}`
      }
      return <Iconicons name={iconName} size = {horizontal ? 20 : 25} color = {tintColor}/>;
    }
  }),

  tapBarOptions:{
    activeTintColor : 'tomato',
    incativeTintColor : 'gray'
  }


  }
);

export default createAppContainer(TabNavigator);