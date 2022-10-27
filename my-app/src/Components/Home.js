import {auth} from "../Server/firebase";
import './Home.css';

function Home () {
    //logout from firebase
    const logout = () => {
        auth.signOut();
    }

    return (
        <div>
            <div className="Home">
                Make your AIs by your hands
            </div>
            <button className = "logout" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home