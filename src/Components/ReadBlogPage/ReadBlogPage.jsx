import React from 'react'
import './ReadBlogPage.css'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const ReadBlogPage = () => {
  const navigate = useNavigate()
  const {readEle} = useSelector((state) => state.counter)
  return (
    <div className='readBlockOuterDiv'>
      <div className="readBlockBackButtonDiv">
        <button className='backButton' onClick={() => navigate("/")}>Back</button>
      </div>
      <div className="readBlogCartDiv">
        <div className="readCardDetailDiv">
          <div className="readCardLeftImageDiv">
            <img src={readEle && readEle.BackImg} alt="" height="100%" width="100%" />
          </div>
          <div className="readCardRightTextDiv">
            <div className="cartAvtarDiv">
              <img src={readEle.avtar} alt="" />
              <h2 >{readEle.loginID}</h2>
            </div>
            <hr />
            <div className="CartTextDiv">
              <h1>{readEle.title}</h1>
              <br />
              <p>The app is for informational purposes only and should not be used as a substitute for professional advice. The app is not responsible for any damages or losses that may occur as a result of using the app. The app is not responsible for any inaccuracies or errors in the data.</p>
              <br />
              <p>{readEle.DOB}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadBlogPage;

