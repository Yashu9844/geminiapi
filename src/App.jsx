  import axios from 'axios'
  import React, { useState } from 'react'

  const App = () => {
    const [question,setQuestion] = useState("")
    const [answers , setanswers]= useState("")
  
  const handleApi=async ()=>{
    
  await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDhWylt0XDm60dpSKr0IiUcUPp7GSMsNu4',{
    
      "contents": [
          {
              "parts": [
                  {
                      "text": question
                  }
              ]
          }
      ]


  }).then(res => {
    console.log(res) 
    setanswers(res.data.candidates[0].content.parts[0].text)
  }).catch(err => console.error(err));
  setQuestion(" ")
  }

    return (
    <div className="">
      <textarea name="hello" id="hello" value={question}rows={"10"}  onChange={(e)=>setQuestion(e.target.value)} >
      asdasd
    </textarea>
    <button onClick={()=>handleApi()}>Click bro bro</button>
    <div className="">{answers && JSON.stringify(answers)}</div>
    </div>
    )
  }

  export default App
