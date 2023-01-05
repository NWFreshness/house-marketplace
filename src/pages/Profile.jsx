import React, {useState, useEffect} from 'react'
import {getAuth, updateProfile} from 'firebase/auth';
import {updateDoc} from 'firebase/firestore';
import {db} from '../firebase.config';
import {useNavigate, Link} from 'react-router-dom';


function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const {name, email} = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  }
  
  return <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>

      <button type='button' onClick={onLogout} className="logOut">Log Out</button>
    </header>
    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">
          Personal Details
        </p>
        <p className="changePersonalDetails">
          {changeDetails ? 'done' : 'change'}
        </p>
      </div>
    </main>
  </div>
}

export default Profile