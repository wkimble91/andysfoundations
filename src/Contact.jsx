import React, { Component } from 'react';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Styles
import './styles/Contact.css';
// Images
import hero from './assets/images/hero.jpg';
import heromobile from './assets/images/hero-m.jpg';
import skyscraper from './assets/images/skyscraper.jpg';
import skyscrapermobile from './assets/images/skyscraper-m.jpg';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Navbar />
        <section id='int-hero'>
          <h1 id='home-h'>Contact Us</h1>
          <picture>
            <source media='(max-width: 600px)' srcset={heromobile} />
            <source media='(min-width: 601px)' srcset={hero} />
            <img
              aria-hidden='true'
              loading='lazy'
              decoding='async'
              src={hero}
              alt='concrete wall with ladders against it'
              width='400'
              height='662'
            />
          </picture>
        </section>

        <section id='contact'>
          <div className='contact__container'>
            <form
              id='contact__form'
              name='contact'
              method='POST'
              enctype='multipart/form-data'
              data-netlify='true'>
              <input type='hidden' name='form_type' value='Contact' />
              <div className='contact__content'>
                <span className='contact__topper'>Contact</span>
                <h2 className='contact__title'>Get in Touch</h2>
                <p className='contact__text'>
                  Fill out the form and send us your plans. We will get back to
                  you as soon as we are able. Or use the information to the
                  right to reach out directly.
                </p>
              </div>
              <label for='name'>
                Name
                <input
                  required
                  type='text'
                  id='name'
                  name='name'
                  minlength='2'
                  autocomplete='name'
                  placeholder='Name'
                />
              </label>
              <label for='email'>
                Email
                <input
                  required
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email'
                  autocomplete='email'
                />
              </label>
              <label for='phone'>
                Phone
                <input
                  required
                  type='text'
                  id='phone'
                  name='phone'
                  placeholder='Phone'
                  autocomplete='tel'
                />
              </label>
              <label for='find-us'>
                How did you find us?
                <input
                  type='text'
                  id='find'
                  name='find-us'
                  placeholder='How did you find us'
                />
              </label>
              <label className='contact__label-upload' for='attachment'>
                Upload plans (optional)
                <input
                  type='file'
                  name='attachment'
                  id='file'
                  className='inputfile'
                  accept='image/png, image/jpeg'
                  multiple
                />
              </label>
              <label className='contact__label-message' for='message'>
                Message
                <textarea
                  required
                  name='message'
                  id='message'
                  placeholder='Write message...'></textarea>
              </label>
              <button className='contact__button-solid' type='submit'>
                Submit Message
              </button>
            </form>
            <div className='contact__right-section'>
              {/* <!--Email--> */}
              <span className='contact__header'>Email</span>
              <a
                className='contact__link'
                href='mailto:debra@downeyfoundation.com'>
                debra@downeyfoundation.com
              </a>
              {/* <!--Phone--> */}
              <span className='contact__header'>Phone</span>
              <a className='contact__link' href='tel:913-962-6644'>
                (913) 962-6644
              </a>
              {/* <!--Address--> */}
              <span className='contact__header'>Address</span>
              <a
                className='contact__link'
                href='https://goo.gl/maps/MfozunTD8VddXTCX6'
                target='_blank'>
                11101 Johnson Dr, Ste 50, Shawnee, KS 66203
              </a>

              {/* <!-- Background Image--> */}
              <picture aria-hidden='true' className='contact__bg-picture'>
                <source media='(max-width: 600px)' srcset={skyscrapermobile} />
                <source media='(min-width: 601px)' srcset={skyscraper} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={skyscraper}
                  alt='concrete foundation by lake'
                  width='542'
                  height='662'
                />
              </picture>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
