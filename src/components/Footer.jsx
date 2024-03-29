import React from 'react';
import '../styles/Footer.css';
import logomobile from '../assets/images/logo-light-m.webp';
import logo from '../assets/images/logo-light.webp';

const Footer = () => {
  return (
    <footer id='footer' class='footer'>
      <div class='footer__container'>
        <div class='footer__left-section'>
          <a class='footer__left-section--logo' href='/'>
            <picture>
              <source
                media='(max-width: 600px)'
                srcset={logomobile}
                type='image/webp'
              />
              <source
                media='(min-width: 601px)'
                srcset={logo}
                type='image/webp'
              />
              <img
                loading='lazy'
                decoding='async'
                src={logo}
                alt='logo'
                width='500'
                height='212'
              />
            </picture>
          </a>
        </div>
        <div class='footer__right-section'>
          <div class='footer__right-section--lists'>
            <ul>
              <li>
                <h2>Office Hours:</h2>
              </li>
              <li>
                <b>Mon - Fri:</b>8:00a - 5:00p
              </li>
              <li>
                <b>Sat - Sun:</b>Closed
              </li>
            </ul>
            <ul>
              <li>
                <h2>Contact</h2>
              </li>
              <li>
                <a href='https://goo.gl/maps/MfozunTD8VddXTCX6' target='_blank'>
                  11101 Johnson Dr, Ste 50
                  <br />
                  Shawnee, KS 66203-2749
                </a>
              </li>
              <li>
                <b>T:</b>
                <a href='tel:913-962-6644'>(913) 962-6644</a>
              </li>
              <li>
                <b>E: </b>
                <a href='mailto:debra@downeyfoundation.com'>
                  debra@downeyfoundation.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class='footer__credit'>
        <span>Designed and Hand Coded by </span>
        <a href='https://www.willkimble.com' target='_blank' rel='noopener'>
          Will Kimble
        </a>{' '}
        <span class='footer__credit--copyright'>
          Copyright &copy; 2022 - Present
        </span>
      </div>
    </footer>
  );
};

export default Footer;
