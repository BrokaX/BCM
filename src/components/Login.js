// Login 
import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import FirebaseService from "../services/firebase";

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
    <main >        
      <section>
        <div>                                                                                               
          <form>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email-address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required                                  
                placeholder="Email address"               
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)} 
                required                                 
                placeholder="Password"              
              />
            </div>                 
            <button type="submit" onClick={onLogin} >      
              Login                                                                  
            </button>                              
          </form>
          <p className="text-sm text-white text-center">
            No account yet? {"  "}
            <NavLink to="/register">Register</NavLink>
          </p>                           
        </div>
      </section>
    </main>
  );
};
 
export default Login;