// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
/*const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
*/

export default class App extends Component {
  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
        <Provider store={store}>
            <View style={{ flex: 1 }}>
              <Header headerText={'Albums'} />
              <AlbumList />
            </View>
        </Provider>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
