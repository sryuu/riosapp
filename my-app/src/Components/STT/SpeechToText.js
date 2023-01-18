import { useNavigate } from 'react-router-dom';
import './SpeechToText.css';
import useSpeechToText from 'react-hook-speech-to-text';

function SpeechToText () {
  const navigate = useNavigate();

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

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
        <div className="SpeechToText_Body_React-Hook_STT">
          <h2>React Hook</h2>
          <div>
            <h1>Recording: {isRecording.toString()}</h1>
            <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
              {isRecording ? 'Stop Recording' : 'Start Recording(free)'}
            </button>
            <ul>
              {results.map((result) => (
                <li key={result.timestamp}>{result.transcript}</li>
              ))}
              {interimResult && <li>{interimResult}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeechToText