import React, { useState } from 'react'

function Carousel() {

    const [imgId, setImgId] = useState(0)

    const img = [
        'https://images.unsplash.com/photo-1683741624027-9dfc086f40c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1683500798266-11b4ba09c675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1683836694582-80aa1f218f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1682444944126-9fb22591061e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ]

    const prevImg = () => {
        setImgId(imgId === 0? img.length - 1 : imgId - 1)
    }

    const nextImg = () => {
        setImgId(imgId === img.length - 1? 0 : imgId + 1)
    }

  return (
    <div>
        <div>
            <button onClick={prevImg}>Prev</button>
        </div>
        {img.map((image, index) =>
        imgId === index &&(
        <div key={image}>
            <img src={image}></img>
        </div>
        ))}
        <div>
            <button onClick={nextImg}>Next</button>
        </div>
    </div>
  )
}

export default Carousel