// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import youTubeAPI from './config/youtube.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App API_KEY={youTubeAPI} searchYouTube={searchYouTube}/>, document.getElementById('app'));
