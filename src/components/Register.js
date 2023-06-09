// Create New User
import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseService from "../services/firebase";
 
const Register = () => {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
 
  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(FirebaseService.auth, email, password)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
 
  // Render
  return (
    <main className="popup-window flex-column min-vh-100 Contact-us" >  
      <section>
        <div>                                                                                             
          <form className="Contact-us-form login-register">                                                                                            
    <h4 className="text-sm text-white text-center">Sign-up</h4>      
            <div className="mb-3 d-flex flex-column">
              <label className="Contact-us-label" htmlFor="email">Email Address</label>
              <input
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required                                  
                placeholder="Email address"     
                className="Contact-us-input-btn"          
              />
            </div>
            <div className="mb-3 d-flex flex-column">
              <label className="Contact-us-label" htmlFor="password">Password</label>
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required                                 
                placeholder="Password"   
                className="Contact-us-input-btn"           
              />
            </div>                                                  
            <button type="submit"  className="Contact-us-submit-btn" onClick={onSubmit} >  
              Register                                
            </button>                                                
          </form>
          <h6 className="text-sm text-white text-center">
            Already have an account?{"  "}
            <NavLink to="/login" className="text-decoration-none" >Login</NavLink>
          </h6>                   
        </div>
      </section>
    </main>
  );
};
 
export default Register;