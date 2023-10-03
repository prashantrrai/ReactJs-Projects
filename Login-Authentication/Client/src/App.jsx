import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ForgotPassword from './components/ForgotPassword'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route exact path='/signup' element={<Signup/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
