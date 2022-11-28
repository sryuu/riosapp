import {auth} from "../Server/firebase";
import './Home.css';
import Button from '@mui/material/Button';
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
              <Button variant="outlined" className="GenresOfAIs" disabled>Image Classification</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Object Detection</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Semantic Segmentation</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Face Recognition</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Text Recognition</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Image To Image</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Semantic Segmentation To Image</Button>
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
              <Button variant="outlined" className="GenresOfAIs" disabled>Translate</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Summarize</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Text Generation</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Text Classification</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Chat Bot</Button>
              <Button variant="outlined" className="GenresOfAIs" disabled>Text To Image</Button>
            </div>
          </div>
        </div>
        <div className="TypeOfSoundAI" id="GenresOfAI">
          <h1>Input Sound</h1>
          <div className="RunningOrNot">  
            <div className="AbleToUse">
              running
              <Button variant="outlined" className="GenresOfAIs" onClick={() => navigate('/SpeechToText')}>Speech To Text</Button>
            </div>
            <div className="NotAbleToUse">
              comming soon
              <Button variant="outlined" className="GenresOfAIs" disabled>Classification</Button>
            </div>
          </div>
        </div>
      </div>
      <Button variant="outlined" className = "logout" onClick={logout}>Logout</Button>
    </div>
  )
}

export default Home