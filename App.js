import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Ionicons from '@expo/vector-icons';

class HomeScreen extends React.Component {//Component를 import 안하면 이렇게 쓴다.
  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Home!</Text>
      <Button title = "Go to Setiings" onPress = {()=>this.props.navigation.navigate('Settings')}/>
      <Button title = "Go to Details" onPress = {()=>this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
} 

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Settings!</Text>
      <Button title = "Go to Home" onPress = {()=>this.props.navigation.navigate('Home')}/>
      <Button title = "Go to Details" onPress = {()=>this.props.navigation.navigate('Details')}/>
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style = {{flex:1, justfyContent : 'center', alignItems : 'center'}}>
      <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home : {
    screen : HomeScreen
  },
  Details : {
    screen : DetailsScreen
  }
});

const SettingsStack = createStackNavigator({
  Settings : {
    screen : SettingsScreen
  },
  Details : {
    screen : DetailsScreen
  }
})

const TabNavigator = createBottomTabNavigator(
  {
    Home : {
      screen : HomeStack
    }, 
    Settings : {
      screen : SettingsStack
    }
  },
  {defaultNavigationOptions : ({navigation}) => ({
    TabBarIcon : ({focused, tintColor}) => {
      const {routeName} = navigation.state;

      let iconName;
      if (routeName === "Home"){
        iconName = `ios-information-circle${focused ? '' : '-outline'}`
      }
      else if (routeName === "Settings"){
        iconName = `ios-options${focused ? '' : '-outline'}`
      }
      return <Iconicons name={iconName} size = {50} color = {tintColor}/>;
    },
  }),

  tabBarOptions:{
    activeTintColor : 'tomato',
    incativeTintColor : 'gray'
  },
  }
);

export default createAppContainer(TabNavigator);