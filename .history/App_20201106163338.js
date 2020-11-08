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

const stackNavigation = createStackNavigator({
  TopNews: TopNewsScreen,
  NewsDetails: NewsDetailsScreen
}, {
  navigationOptions: {
    header: null,
  }
})

const bottomNavigation = createBottomTabNavigator({
  TopNews: stackNavigation,
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