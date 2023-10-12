import React from 'react';
import { Clothes } from '../Clothes/Clothes'; 
import { Clothess } from '../Clothes/Clothess'; 

export const Home = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>BooS</h1>
            </div>

            <div className="products">
                {Clothes.map((clothingItem) => (
                    <Clothess data={clothingItem} />
                ))}
            </div>
        </div>
    );
};

