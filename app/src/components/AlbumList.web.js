import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
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

  render() {
    //console.log('rendering album list: '+this.props.albu);

   /*   <SearchBar
          lightTheme
          autoCorrect={false}
          // onChangeText={this.onSearchChange}
          // showLoadingIcon={this.state.isLoading}
          // value={this.state.filter}
          placeholder='Search a contact...'
      />*/

   console.log("platform name: "+Platform.OS);
    return (
        <View>

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
