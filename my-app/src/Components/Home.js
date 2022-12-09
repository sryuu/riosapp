import {auth} from "../Server/firebase";
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home () {
  const navigate = useNavigate();
  
  //logout from firebase
  const logout = () => {
    auth.signOut();
  }

  return (
    <div className="Home">
      Make your AIs by your hands
      <div className="ChooseTypeOfAI">
        <div className="TypeOfImageAI" id="GenresOfAI">
          <h1>Input Image</h1>
          <div className="RunningOrNot">
            <div className="AbleToUse">
              running
            </div>
            <div className="NotAbleToUse">
              comming soon
              <button variant="outlined" className="GenresOfAIs" disabled>Image Classification</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Object Detection</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Semantic Segmentation</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Face Recognition</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Text Recognition</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Image To Image</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Semantic Segmentation To Image</button>
            </div>
          </div>
        </div>
        <div className="TypeOfTextAI" id="GenresOfAI">
          <h1>Input Text</h1>
          <div className="RunningOrNot">
            <div className="AbleToUse">
              running
            </div>
            <div className="NotAbleToUse">
              comming soon
              <button variant="outlined" className="GenresOfAIs" disabled>Translate</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Summarize</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Text Generation</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Text Classification</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Chat Bot</button>
              <button variant="outlined" className="GenresOfAIs" disabled>Text To Image</button>
            </div>
          </div>
        </div>
        <div className="TypeOfSoundAI" id="GenresOfAI">
          <h1>Input Sound</h1>
          <div className="RunningOrNot">  
            <div className="AbleToUse">
              running
              <button variant="outlined" className="GenresOfAIs" onClick={() => navigate('/SpeechToText')}>Speech To Text</button>
            </div>
            <div className="NotAbleToUse">
              comming soon
              <button variant="outlined" className="GenresOfAIs" disabled>Classification</button>
            </div>
          </div>
        </div>
      </div>
      <button variant="outlined" className = "logout" onClick={logout}>Logout</button>
    </div>
  )
}

export default Home