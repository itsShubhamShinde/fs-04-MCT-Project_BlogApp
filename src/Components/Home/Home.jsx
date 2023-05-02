import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Home.css'
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { SetReadEle } from '../../Redux/reducer';


const Home = () => {
  const { userData } = useSelector((state) => state.counter)
 const dispatch = useDispatch()
  return (
    <div className='homeOuterDiv'>
      <div className="HomebuttonDiv">
          <h1>React Blog App</h1>
        <Link to="/profile" className='createButton'>
          <button>Create New Post</button>
        </Link>
      </div>
      <div className="userDetailDiv">
        {
          userData.length > 0 ?
            userData.map((ele,id) => {
              return <div className="UserCardDiv">
                <div className="cartBagImgDiv">
                  <img src={ele.BackImg} alt="" />
                </div>
                <div className="AvtarImgDiv">
                  <img src={ele.avtar} alt="" height="100%" width="100%" />
                </div>
                <div className="cartDetailDiv">

                  <div className="cardTitleDiv">
                    <Link to="/readPage" onClick={()=> dispatch(SetReadEle(ele))}><h2>{ele.title}</h2></Link>
                    <p >{ele.discription}</p>
                  </div>
                  <div className="cardUserIdDiv">
                    <div className="iconDiv">
                      <FaUserAlt className='cardIcon' />
                      <h3>{ele.loginID}</h3>
                    </div>
                    <div className="iconDiv">
                      <SlCalender className='cardIcon' />
                      <p>{ele.DOB}</p>
                    </div>
                  </div>
                </div>
              </div>
            })



            : <h2>No Data Present</h2>
        }
      </div>
    </div>
  )
}

export default Home