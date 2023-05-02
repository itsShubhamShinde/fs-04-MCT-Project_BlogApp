import React, { useEffect, useState } from 'react'
import './ProfilePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddBlogPost } from '../../Redux/reducer'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const navigate = useNavigate();
  const { gitApi, searchAPI } = useSelector((state) => state.counter)
  const sendDataToRedux = useDispatch()
  const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [disable,setDisable]= useState(true)

  useEffect(()=>{
      if(title.length > 10 && subject.length > 20){
        setDisable(false)
      }
  },[title,subject])

  console.log(searchAPI);
  const AddBlogData = () => {
    const locale = "en";
    var today = new Date();
    const date = `${today.toLocaleDateString(locale, {
      month: "long",
    })} ${today.getDate()}, 2023`;
    const time = today.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
    let x = Math.floor(Math.random() * searchAPI.results.length);
    sendDataToRedux(AddBlogPost({
      id: Date(),
      BackImg: searchAPI.results[x].urls.regular,
      avtar: gitApi[0].avatar_url,
      loginID: gitApi[0].login,
      title: title,
      discription: subject,
      DOB: `${date} ${time}`,
    }))
    navigate("/")
    setDisable(true)
  }
  return (
    <div className='CreatePageOuterDiv'>

      <div className="CreatePageLowerBlockDiv">
        <div className="blogTitleDiv">
          <h1>Create New Blog Here</h1>
          <br />
          <hr />
        </div>
        <div className="createBlogDiv">
          <input type="text" className='TitleInputDiv' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
          <textarea classname="SubjectInputDiv" id="textArea" cols="80" rows="20" placeholder='Subject' className='SubjectTextAreaDiv' onChange={(e) => setSubject(e.target.value)}></textarea>
          <div className="createBlogButtonDiv">
            <button className='AddPostButton' disabled={disable} onClick={AddBlogData}>Add New Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage