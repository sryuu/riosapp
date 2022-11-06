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
                    <h1>Input Image</h1>
                    <button className="GenresOfAIs">Image Classification</button>
                    <button className="GenresOfAIs">Object Detection</button>
                    <button className="GenresOfAIs">Semantic Segmentation</button>
                    <button className="GenresOfAIs">Face Recognition</button>
                    <button className="GenresOfAIs">Text Recognition</button>
                    <button className="GenresOfAIs">Image To Image</button>
                    <button className="GenresOfAIs">Semantic Segmentation To Image</button>
                </div>
                <div className="TypeOfTextAI" id="GenresOfAI">
                    <h1>Input Text</h1>
                    <button className="GenresOfAIs">Translate</button>
                    <button className="GenresOfAIs">Summarize</button>
                    <button className="GenresOfAIs">Text Generation</button>
                    <button className="GenresOfAIs">Text Classification</button>
                    <button className="GenresOfAIs">Chat Bot</button>
                    <button className="GenresOfAIs">Text To Image</button>
                </div>
                <div className="TypeOfSoundAI" id="GenresOfAI">
                    <h1>Input Sound</h1>
                    <button className="GenresOfAIs">Classification</button>
                    <button className="GenresOfAIs">Speech To Text</button>
                </div>
            </div>
            <button className = "logout" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home