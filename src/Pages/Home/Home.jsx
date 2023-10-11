import React from 'react'
import { Clothes } from '../Clothes/CLOTHES'
export const Home = () => {
  return (
    <div clasname = "home">
        <div>
        <div className="Title"></div>
            <h1> BooS </h1>
        </div>
        <div className="Clothes"> {Clothes.map((Clothes) => {})}

        </div>
    </div>
  )
}
