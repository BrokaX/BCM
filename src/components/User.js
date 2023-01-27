import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import FirebaseService from "../services/firebase";
 
const User = () => {
  const navigate = useNavigate();

  // Get Current User Data
  useEffect(() => {
    onAuthStateChanged(FirebaseService.auth, (user) => {
      if (user) {
        // Registered - User's profile
        //const displayName = user.displayName;
        //const email = user.email;
        //const photoURL = user.photoURL;
        const uid = user.uid;
        console.log("uid:", uid);
      } else {
        // Logged out
        console.log("the user is logged out");
      };
    }); 
  }, []);

  // Logout
  const handleLogout = () => {               
    signOut(FirebaseService.auth)
      .then(() => {
        // Logged Out successfully
        navigate("/login");
        console.log("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Render
  return (
    <section>        
      <nav>
        <div>
        	<button type="submit" onClick={handleLogout} >
            Logout
          </button>
        </div>
      </nav>
    </section>
  );
};
 
export default User;
