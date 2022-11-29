import './Header.css';
import {auth} from '../Server/firebase';

function Header () {
  // get user info from firebase
  const user = auth.currentUser;
  console.log(user);
  
  return ( 
    <div className="Header">
      <div className="Header_Left">
        <div className="Header_AppName" id="Header_Middle_Text">
          AI Maker
        </div>
      </div>
      <div className="Header_UserInfo">
        <div className="Header_UserInfo_UserName" id="Header_Middle_Text">
          {user.displayName}
        </div>
        <div className="Header_UserInfo_Img">
          <img className="userImage" src={user.photoURL}/>
        </div>
      </div>
    </div>
  )
}

export default Header