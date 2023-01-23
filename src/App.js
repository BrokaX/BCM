import React from 'react'
import Form from './components/Form';
import Read from './components/Read';
import Result from './components/Result';
import Update from './components/Update';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import NavigationButtons from './components/Navigations';
function App() {
return (
  <>
<BrowserRouter>
<Routes>
 
    
      <Route path="/" element={<><NavigationButtons/><Form/></>} />
      <Route path="/read" element={<><NavigationButtons/><Read/> </>} />
      <Route path="/result" element={<><NavigationButtons/><Result/></>} />
      <Route path="/update" element={<><NavigationButtons/><Update/></>} />
  </Routes>
</BrowserRouter> 
  </>

  )
}

export default App
