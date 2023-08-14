import React, { useEffect } from 'react'
import './Start.css'

function Start() {
  const apiUrl = "http://api.localhost/file?path=db.json"
  // const apiUrl = "https://jsonplaceholder.typicode.com/todos/"
  function pullJson() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
      })
    // return
  }
  useEffect(() => {
    pullJson()
  })
  return (
    <div>
      <h1>Start</h1>
    </div>
  )
}

export default Start