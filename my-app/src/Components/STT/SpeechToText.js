import { useNavigate } from 'react-router-dom';
import './SpeechToText.css';

function SpeechToText () {
  const navigate = useNavigate();

  return (
    <div className="SpeechToText">
      <h1>Speech To Text</h1>
      <div className="SpeechToText_Body">
        <div className="SpeechToText_Body_Google_STT">
          <h2>Google</h2>
          comming soon
        </div>
        <div className="SpeechToText_Body_Microsoft_STT">
          <h2>Microsoft</h2>
          <div className="SpeechToText_Body_Microsoft_STT_Azure">
            <button onClick={() => navigate('/STT/Azure/FromFile')}>From File</button>
            <button onClick={() => navigate('/STT/Azure/FromMic')}>From Mic(1$/h)</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeechToText