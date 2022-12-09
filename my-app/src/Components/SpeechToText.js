import { useNavigate } from 'react-router-dom';
import './SpeechToText.css';

function SpeechToText () {
  const navigate = useNavigate();

  return (
    <div className="SpeechToText">
      <h1>Speech To Text</h1>
      <div className="SpeechToText_Footer">
        <button variant="outlined" onClick={() => navigate('/')}>back to home</button>
      </div>
    </div>
  )
}

export default SpeechToText