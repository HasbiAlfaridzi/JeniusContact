import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { store } from './redux/store';
import HomeScreen from './views/home/index.js';
import CustomDrawer from './components/CustomDrawer';
import ContactScreen from './views/contact';
import BookDetailsScreen from './views/bookDetails/';
import ContactForm from './views/contactForm/index';

const HomeNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen},
  Contact: {screen : ContactScreen},
  
}, {
  initialRouteName : 'Home',
  drawerType: 'slide',
  contentComponent: props => <CustomDrawer {...props} />
});

const Navigator = createStackNavigator({
  HomeNavigator,
  BookDetails: {screen : BookDetailsScreen},
  ContactForm: {screen: ContactForm}
}, {
  initialRouteName: 'HomeNavigator',
  headerMode: 'none'
});

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}