import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs' ;
import ReadStoryScreen from "./screens/ReadStoryScreen";
import WriteStoryScreen from "./screens/WriteStoryScreen ";

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory:{screen: WriteStoryScreen},
    ReadStory: {screen: ReadStoryScreen}
  },
{
  defaultNavigationOptions: ({ naigation }) =>{
    tabBarIcon :({})=>{
      const routeName = navigation.state.routeName
      if (routeName=== "ReadStory"){
        return(
          <Image
              style={{ width: 40, height: 40 }}
              source={require("./assets/read.png")}
          />
        ) 
      }else if (routeName=== "WriteStory"){
        <Image
        style={{ width: 40, height: 40 }}
        source={require("./assets/write.png")}
      />
      }
    }
  }
}
)

const AppContainer= createAppContainer(TabNavigator);