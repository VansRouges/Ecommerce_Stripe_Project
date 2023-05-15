import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

interface FooterBannerProps {
  footerBanner: {
    discount: string;
    largeText1: string;
    largeText2: string;
    saleTime: string;
    smallText: string;
    midText: string;
    desc: string;
    product: string;
    buttonText: string;
    image: string;
  };
}

const FooterBanner: React.FC<FooterBannerProps> = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(footerBanner.image).toString()} 
          className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner;
