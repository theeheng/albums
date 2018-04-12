import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { fetchAlbums } from '../../../actions';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.props.fetchAlbums();
    }

  renderAlbums() {
    if(this.props.albums.length > 0) {
        return this.props.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }
  }

  renderSearchBar()
  {
   // if(Platform.OS !== 'web' && this.props.albums.length > 0)
   // {
      return (
          <SearchBar
              lightTheme
              autoCorrect={false}
              // onChangeText={this.onSearchChange}
              // showLoadingIcon={this.state.isLoading}
              // value={this.state.filter}
              placeholder='Search an album...'
          />
      );
   // }
  }
  render() {
    //console.log('rendering album list: '+this.props.albu);

   /*   */

   console.log("platform name: "+Platform.OS);
    return (
        <View style={{flex : 1}}>
            {this.renderSearchBar()}
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
        </View>
    );
  }
}

const mapStateToProps = state => {
  const albums = state.albumReducer;

  console.log('map state albums'+albums);
  return { albums };
};

export default connect(mapStateToProps, { fetchAlbums })(AlbumList);
