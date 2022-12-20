import { useState,useEffect } from 'react';

const SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");

function FromMic () {
  const [recognizeType, setRecognizeType] = useState(false);
  const [STTResult, setSTTResult] = useState("");

  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(process.env.REACT_APP_AZURE_STT_KEY,"japanwest");
  speechConfig.speechRecognitionLanguage = "ja-JP";
  const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  const [recognizer,setRecognizer] = useState(new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig));

  recognizer.recognized = async(s, e) => {
    if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
      console.log(`RECOGNIZED: Text=${e.result.text}`);
      setSTTResult(e.result.text);
    }
    else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
      console.log("NOMATCH: Speech could not be recognized.");
    }
  };

  const startSTT = async() => {
    await recognizer.startContinuousRecognitionAsync();
  }

  const stopSTT = async() => {
    await recognizer.stopContinuousRecognitionAsync();
    // await recognizer.close();
  }

  useEffect(() => {
    console.log(recognizeType);
    if (recognizeType) {
      // stopSpeechToText();
      console.log ("HERE>>>>>>>>>>>>>>>>");
      stopSTT();
      console.log ("stop");
    }
    else {
      //startSpeechToText();
      startSTT();
      console.log ("start");
    }
  }, [recognizeType]);

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