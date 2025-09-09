import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'

const Costumer = () => {
  const [cosumer, setCosumer] = useState([])

  useEffect(() => {
    axios.get("/api/consumerList")
      .then(response => {
        setCosumer(response.data)
      }).catch((err) => {
        console.error(err)
      })
  })


  return (
    <div className='py-5 my-5 container'>
      <h1>costumer</h1>
      <p>consumer:{cosumer.length} </p>
      {cosumer.map((cosumer) =>
        (
          <div className="div" key={cosumer.ConsumerNo}>
            <p>{cosumer.ConsumerName}</p>
            

          </div>
        )
      )}


      
    </div>


  )
}

export default Costumer
