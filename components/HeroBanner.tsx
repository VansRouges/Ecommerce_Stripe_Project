import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'

interface HeroBannerProps {
  heroBanner: {
    smallText: string,
    midText: string,
    largeText1: string,
    image: string,
    product: string,
    buttonText: string,
    desc: string
  }
}


const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img 
          src={urlFor(heroBanner.image).toString()} 
          alt='headphones' 
          className='hero-banner-image'
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner