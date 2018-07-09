import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { fetchAlbums, searchAlbums, searchChanged } from '../../../actions';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { results: [] };

  componentWillMount() {
    this.props.fetchAlbums();
    }

  renderAlbums() {
    if(this.props.results.length > 0) {
        return this.props.results.map(album =>
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
               onChangeText={ value => this.props.searchChanged(value) }
              showLoadingIcon={this.props.loading}
              onSubmitEditing={ value => this.props.searchAlbums(this.props.searchString) }
               value={this.props.searchString}
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
  const { results, loading, searchString } = state.albumReducer;

  console.log('map state albums size: '+results.length);
  return { results, loading, searchString };
};

export default connect(mapStateToProps, { fetchAlbums, searchAlbums, searchChanged })(AlbumList);
