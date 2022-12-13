import { useState } from 'react';

const SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");

function FromMic () {
  const [recognizeType, setRecognizeType] = useState(false);
  const [STTResult, setSTTResult] = useState("");

  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("d2225769ec0b4ead8c0b7af3629ece30","japanwest");
  speechConfig.speechRecognitionLanguage = "ja-JP";

  var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  
  const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
  if (recognizeType) {
    recognizer.stopContinuousRecognitionAsync()//it will take a while to stop
  } else {
    recognizer.recognizeOnceAsync(
      function (result) {
        setSTTResult(result.text);
        console.log(result);
        recognizer.close();
        recognizer = undefined;
      },
      function (err) {
        console.trace("err - " + err);
        recognizer.close();
        recognizer = undefined;
      }
    )
  }

  return (
    <div className="Azure_STT_FromFile">
      <h1>From Mic</h1>
      {recognizeType ? (
        <div>
          <button onClick={() => setRecognizeType(false)}>Start recognition</button>
          <p>Press the button and start speaking.</p>
        </div>
      ) : (
        <div>
          <button onClick={() => setRecognizeType(true)}>Stop recognition</button>
          <p>Listening...</p>
        </div>
      )}
      STTResult: {STTResult}
    </div>
  );
};

export default FromMic;