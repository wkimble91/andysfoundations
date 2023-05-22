import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/CTA.css';
import landing from '../assets/images/landing.jpg';
import landingmobile from '../assets/images/landing-m.webp';

const CTA = () => {
  return (
    <section id='cta' className='cta'>
      <div className='cta__container'>
        <h2 className='cta__title'>
          Get It Done <br /> With Us Today
        </h2>
        <p className='cta__desc'>
          Looking to begin your new home or business?
          <br />
          Get started on the right foot and reach out!
        </p>
        <NavLink to='/contact' className='buttonSolid'>
          Get an Estimate Now
        </NavLink>
      </div>
      <picture className='cta__background'>
        <source media='(max-width: 600px)' srcSet={landingmobile} />
        <source media='(min-width: 601px)' srcSet={landing} />
        <img
          aria-hidden='true'
          loading='lazy'
          decoding='async'
          src={landing}
          alt='construction site'
          width='1920'
          height='1280'
        />
      </picture>
    </section>
  );
};

export default CTA;
