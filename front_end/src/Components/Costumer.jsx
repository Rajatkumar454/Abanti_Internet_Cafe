import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Costumer = () => {
  const { consumer, setConsumer } = useState([])

  // useEffect(() => {
  //   axios.get("/data")
  //     .then(response => {
  //       setConsumer(response.data)
  //     }).catch((err) => {
  //       console.error(err)
  //     })
  // })


  return (
    <div className='py-5 my-5'>
      <h1>costumer</h1>
      <p>consumer: {consumer}</p>
    </div>


  )
}

export default Costumer
