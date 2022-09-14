import Nav from './components/Nav';
import Photo from './components/Tagging/Photo';
import Notification from './components/Tagging/Notification';
import FeedbackBar from './components/Feedback Bar/feedback-bar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <FeedbackBar />
      <Photo>
        <Notification />
      </Photo>
    </div>
  );
}

export default App;
