// Login 
import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import FirebaseService from "../services/firebase";
import FooterMain from "./FooterMain";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
       
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(FirebaseService.auth, email, password)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }); 
  };
  
  // Render
  return(      
    <main className="d-flex flex-column min-vh-100 Contact-us" >        
        <div>                                                                                               
          <form className="Contact-us-form">
            <div className="mb-3 d-flex flex-column">
              <label  className="Contact-us-label" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email-address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required                                  
                placeholder="Email address"   
                className="Contact-us-input-btn"             
              />
            </div>
            <div className="mb-3 d-flex flex-column">
              <label   className="Contact-us-label" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)} 
                required                                 
                placeholder="Password"    
                className="Contact-us-input-btn"           
              />
            </div>                 
            <button type="submit"  className="Contact-us-submit-btn" onClick={onLogin} >      
              Login                                                                  
            </button>                              
          </form>
          <h6 className="text-sm text-white text-center">
            No account yet? {"  "}
            <NavLink to="/register" className="text-decoration-none">Register</NavLink>
          </h6>                           
        </div>
    </main>
  );
};
 
export default Login;