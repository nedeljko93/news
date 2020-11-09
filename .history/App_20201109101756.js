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
import { Image, icon } from 'react-native'


const stackNavigation = createStackNavigator({
  TopNews: TopNewsScreen,
  NewsDetails: NewsDetailsScreen
}, {
  navigationOptions: {
    header: null,
  }
})

const bottomNavigation = createBottomTabNavigator({
  TopNews: {
    screen: stackNavigation,
    tabBarOptions: {
      showIcon: true
    },
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Top news",
      showIcon: true,
      tabBarIcon: ({ tintColor }) =>
        <Image source={require('./src/res/ic_star.png')} style={{ width: 20, height: 20, tintColor: tintColor }} />

    })
  },
  Categories: {
    screen: CategoriesScreen,
    tabBarOptions: {
      showIcon: true
    },
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Top news",
      showIcon: true,
      tabBarIcon: ({ tintColor }) =>
        <Image source={require('./src/res/ic_category.png')} style={{ width: 20, height: 20, tintColor: tintColor }} />

    })
  }
}, {
  tabBarOptions: {
    labelPosition: 'below-icon',
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