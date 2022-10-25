import {auth} from "../Server/firebase";

function Home () {
    //logout from firebase
    const logout = () => {
        auth.signOut();
    }

    return (
        <div>
            Home
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home