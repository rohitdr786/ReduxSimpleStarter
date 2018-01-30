import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; // since its not a lib file
// we have to specify the path. Also we can use a different name in place of
// SearchBar as its a default export.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB2exktkamhieGx0RxKOOR14-tHMLlkbhU';

// Create a function component and this component should produce an HTML
// const App = function () {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Create a Class component and this component should produce an HTML
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
     };

     this.videoSearch('Dota2Wtf');

  }

  videoSearch(term){
    YTSearch({ key : API_KEY , term : term }, (videos) => {
      console.log(videos);
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
       });
    });
  }

  render(){
    const videoSearch = _.debounce(term => this.videoSearch(term),300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// Take this components HTML and put it on the page(ie. in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
