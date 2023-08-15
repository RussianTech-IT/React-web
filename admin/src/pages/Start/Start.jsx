import React, { useEffect, useState } from 'react'
import './Start.css'

function Start() {
  const apiURL = "http://localhost:5000/api/users"
  const [backendData, setBackend] = useState([{}])

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        setBackend(data)
        console.log(data)
      })
  }, [])
  return (
    <div className="parent">
      {(typeof backendData.users === 'undefined') ? (<h2>Loading...</h2>) : (
        backendData.users.map((user, i) => (
          <p className='listUsers' key={i}>{i + 1} {user}</p>
        ))
      )}
    </div>
  )

}

export default Start

// // const apiUrl = "http://api.localhost/file?path=db.json"
  // const apiUrl = "http://localhost/get?source=external&label=test"
  // const [backendData, setBackend] = useState([{}])
  // // const apiUrl = "https://jsonplaceholder.typicode.com/todos/"

  // useEffect(() => {
  //   fetch(apiUrl).then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackend(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  // return (
  //   <div>
  //     <h1>Start</h1>
  //     {(typeof backendData.external === 'undefined') ? (<h2>Loading...</h2>) : (
  //       backendData.users.map((data, i) => (
  //         <p className='listUsers' key={i}>{i + 1} {data}</p>
  //       ))
  //     )}

  //   </div>