import React, { useState } from 'react'
import './Login.css'
import { FaUserAlt } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { FeatchGitData, SetLogginedIn, FeatchImageData } from '../../Redux/reducer';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const nagavite = useNavigate()
  const { LoginData } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [password, setPasswod] = useState("")
  const checkfunc = () => {
    if (LoginData.user === input && LoginData.pass === password) {
      dispatch(SetLogginedIn(true))
      nagavite("/")
    } else {
      alert("Enter Proper Credentials")
    }
  }
  const gitData = async () => {
    const res = await fetch("https://api.github.com/search/users?q=itsShubhamShinde")
    const data = await res.json()
    dispatch(FeatchGitData(data.items))
  }
  const SearchData = async () => {
    const res = await fetch("https://api.unsplash.com/search/photos?page=1&query=coding&client_id=7dQXxXPcQFfpfkkjdklsYxp0mGWT9aviICNbI6N3vMQ")
    const data = await res.json()
    dispatch(FeatchImageData(data))
  }
  return (
    <div className='LoginOuterDiv'>
      <div className="loginDiv">
        <div className="profileDiv">
          <div className="profileUpperDiv">
            <p>Welcome Back...!</p>
          </div>
          <div className="profileLowerDiv">
            <img src="https://img.freepik.com/premium-vector/abstract-icon-vector-illustration-logo-logo-brand-company-business-creative-design-social-project_786748-8100.jpg" alt="" height={100} width={100} />
            <br />
            <h3>Designed by </h3>
            <br />
            <h2 style={{ color: "#45b5b4" }}>Shubham Shinde</h2>
          </div>
        </div>
        <div className="loginFormDiv">
          <h1>LOGIN</h1>
          <form action="" className='formDiv'>
            <div className="inputDiv">
              <label htmlFor="">Username</label> <br />
              <div className='inputBoxWrap'>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <FaUserAlt className='icon' />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="">Password</label> <br />
              <div className='inputBoxWrap'>
                <input type="password" onChange={(e) => setPasswod(e.target.value)} />
                <VscSearch className='icon' />
              </div>
            </div>
            <div className="buttonDiv">
              <button onClick={() => {
                checkfunc()
                gitData()
                SearchData()
              }}>Login</button>
            </div>
        <p style={{color:'red' , fontSize:'1.5ch'}}>Use admin and admin123 to login Credentials resp..!</p>
          </form>
          <div className="forgetDiv">
            <p>Forget</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;