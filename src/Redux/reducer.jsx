import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    LoginData : {
        user: 'admin',
        pass: 'admin123',
    },
    LoggedIn :false,
    gitApi : [],
    readEle: [],
    searchAPI:[],
    userData:[
        {   id:'1',
            BackImg:"https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzU1Mjd8MHwxfHNlYXJjaHwxfHwlMjQlN0JkYXRhJTdEfGVufDB8fHx8MTY4Mjk2MzQ2OA&ixlib=rb-4.0.3&q=80&w=1080",
            avtar: "https://avatars.githubusercontent.com/u/116879256?v=4",
            loginID: "itsShubhamShinde",
            title:"ReactJS Blog Application",
            discription:"I found a course on Udemy that teaches how to build a complete blog application using the MERN stack (MongoDB, Express, React, Node.js) with Redux (Redux Toolkit) and Tailwindcss.",
            DOB:"Sep 28, 2023 11:33 AM"
        },
        {
          id:"2",
            BackImg:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzU1Mjd8MHwxfHNlYXJjaHwyfHwlMjQlN0JkYXRhJTdEfGVufDB8fHx8MTY4Mjk2MzQ2OA&ixlib=rb-4.0.3&q=80&w=1080",
            avtar: "https://avatars.githubusercontent.com/u/116879256?v=4",
            loginID: "itsShubhamShinde",
            title:"Git-hub finder app using reactJS",
            discription:"we can make github finder app for stocking anyone. In this we use api fatch and context functionality.",
            DOB:"May , 2023 1:33 PM",
        },
        {
            id:"3",
            BackImg:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzU1Mjd8MHwxfHNlYXJjaHwzfHwlMjQlN0JkYXRhJTdEfGVufDB8fHx8MTY4Mjk2MzQ2OA&ixlib=rb-4.0.3&q=80&w=1080",
            avtar: "https://avatars.githubusercontent.com/u/116879256?v=4",
            loginID: "itsShubhamShinde",
            title:"Weather finder app using reactJS.",
            discription:"For finding the weather of any city, we made a weather finder app for help people to find valuable Info.",
            DOB:"Apr2, 2023 4:53 PM "
        },
        
    ],
   

  },
  reducers: {
    FeatchGitData : (state,action) => {
      state.gitApi = action.payload;
    },
    FeatchImageData : (state,action) => {
      state.searchAPI = action.payload;
    },
    AddBlogPost : (state,action) =>{
        state.userData.push(action.payload)
    },
    SetLogginedIn : (state,action)=>{
        state.LoggedIn = action.payload;
    },
    SetReadEle : (state,action)=>{
        state.readEle = action.payload;
    }
  },
})

export const { FeatchGitData, FeatchImageData, AddBlogPost,SetLogginedIn,SetReadEle } = counterSlice.actions

export default counterSlice.reducer