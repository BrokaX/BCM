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
    <main>        
      <section>
        <div>                                                                                             
          <form>                                                                                            
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required                                  
                placeholder="Email address"               
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required                                 
                placeholder="Password"              
              />
            </div>                                                  
            <button type="submit" onClick={onSubmit} >  
              Register                                
            </button>                                                
          </form>
          <p>
            Already have an account?{"  "}
            <NavLink to="/login" >Login</NavLink>
          </p>                   
        </div>
      </section>
    </main>
  );
};
 
export default Register;