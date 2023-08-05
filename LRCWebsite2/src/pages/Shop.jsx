import React from 'react';
import ShopItem from '../components/shop/ShopItem';
import CowTrailLarge from '../assets/splashArt/CowTrailLarge.png';
import CowAngleFaded from '../assets/CowAngleFaded.png';

function Shop(props) {
    return (
        <div className='flex flex-col items-center justify-center mb-[300px] mt-[20px] relative'>
            <div className='absolute top-[75px] right-[250px] z-[-1]'>
                <img src={CowTrailLarge} className='w-[35vw]'></img>
            </div>

            <h1 className="lg:text-[84px] text-[44px] text-center">From Our Farm to Your Table</h1>
            <h1 className="lg:text-[26px] text-[44px] text-center">Produce Boxes Perfectly Designed to fill your needs</h1>
            <div className='flex flex-col items-center mt-[75px] gap-[225px]'>
                <ShopItem></ShopItem>
                <ShopItem></ShopItem>
                <ShopItem></ShopItem>
            </div>
        </div>
    );
}

export default Shop;