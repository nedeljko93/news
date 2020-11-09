import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';
import CategoriesScreen from './src/screens/CategoriesScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';
import TopNewsScreen from './src/screens/TopNewsScreen';
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'
import { Image } from 'react-native'


const stackNavigation = createStackNavigator({
  TopNews: TopNewsScreen,
  NewsDetails: NewsDetailsScreen
}, {
  navigationOptions: {
    header: null,
  }
})
stackNavigation.navigationOptions={
  title:'tracks'
}

const bottomNavigation = createBottomTabNavigator({
  TopNews: {
    screen: stackNavigation,
    Categories: CategoriesScreen
  },
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 15,
    },
    style: {
      borderTopWidth: 0,
      paddingTop: 3,
      paddingBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 0 }
    }

  }
})

const App = createAppContainer(bottomNavigation)
export default () => {
  return (
    <Provider store={Store}>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
  )
}