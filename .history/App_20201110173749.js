import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';
import CategoriesScreen from './src/screens/CategoriesScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';
import TopNewsScreen from './src/screens/TopNewsScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'
import { Image, icon } from 'react-native'
import CategoriesList from './src/common/CategoriesList';



const stackNavigation = createStackNavigator({
  TopNews: TopNewsScreen,
  NewsDetails: NewsDetailsScreen
})
const stackNavigationCategory = createStackNavigator({
  Categories: CategoriesScreen,
  Category: CategoryScreen
}, navigationOptions = ({ navigation }) => ({
  headerTintColor: "royalblue",
  headerStyle: {
    backgroundColor: '#006bb3'
  },
}))


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
    screen: stackNavigationCategory,
    tabBarOptions: {
      showIcon: true
    },
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Categories",
      showIcon: true,
      tabBarIcon: ({ tintColor }) =>
        <Image source={require('./src/res/ic_category.png')} style={{ width: 20, height: 20, tintColor: tintColor }} />

    })
  }
}, {
  tabBarOptions: {
    labelPosition: 'below-icon',
    activeTintColor: 'white',
    inactiveTintColor: '#888888',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      borderWidth: 0.5,
      borderBottomWidth: 1,
      backgroundColor: '#006bb3',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderColor: '#E8E8E8',
      position: 'absolute'
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