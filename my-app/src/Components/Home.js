import {auth} from "../Server/firebase";
import './Home.css';

function Home () {
    //logout from firebase
    const logout = () => {
        auth.signOut();
    }

    return (
        <div className="Home">
                Make your AIs by your hands
            <div className="ChooseTypeOfAI">
                <div className="TypeOfImageAI" id="GenresOfAI">
                    <h1>Image AI</h1>
                    <button>Image Recognition</button>
                    <button>Object Detection</button>
                    <button>Semantic Segmentation</button>
                    <button>Face Recognition</button>
                    <button>Text Recognition</button>

                </div>
                <div className="TypeOfSoundAI" id="GenresOfAI">
                    <h1>Sound AI</h1>
                    <button>Speech Recognition</button>
                    <button>Sound Recognition</button>
                </div>
                <div className="TypeOfTextAI" id="GenresOfAI">
                    <h1>Text AI</h1>
                    <button>Translate</button>
                    <button>Summarize</button>
                    <button>Text Generation</button>
                    <button>Text Classification</button>
                    <button>Chat Bot</button>
                </div>
                <div className="TypeOfGANAI" id="GenresOfAI">
                    <h1>GAN AI</h1>
                    <button>Text To Image</button>
                    <button>Image To Image</button>
                    <button>Semantic Segmentation To Image</button>
                </div>
            </div>
            <button className = "logout" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home