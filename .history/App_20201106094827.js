import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';
import CategoriesScreen from './src/screens/CategoriesScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';
import TopNewsScreen from './src/screens/TopNewsScreen';

const stackNavigation = createStackNavigator({
  TopNews: TopNewsScreen,
  NewsDetails: NewsDetailsScreen
})

const bottomNavigation = createBottomTabNavigator({
  TopNews:stackNavigation,
  Categories: CategoriesScreen
})

const App = createAppContainer(bottomNavigation)
export default () => {
  return (
    <App ref={(navigator) => { setNavigator(navigator) }} />
  )
}