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
})
stackNavigation.navigationOptions={
  title:'tracks',
  header: null,
}

const bottomNavigation = createBottomTabNavigator({
  TopNews: {
    screen: stackNavigation,
    Categories: CategoriesScreen
  })

const App = createAppContainer(bottomNavigation)
export default () => {
  return (
    <Provider store={Store}>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
  )
}