import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleData[0]
    };
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('billie ei');
  }

  getYouTubeVideos(query) {
    let options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videos: videos
      });
    });
  }

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleVideoChange={this.getYouTubeVideos}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleVideoClick={this.handleVideoClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
