import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import CTA from './components/CTA';
import Footer from './components/Footer';
// Styles
import './styles/Home.css';
// SVGs
import marker from './assets/images/marker.svg';
import calendar from './assets/images/calendar.svg';
import dollar from './assets/images/dollar.svg';
// Images
import landing from './assets/images/landing.jpg';
import landingwebp from './assets/images/landing.webp';
import landingmobile from './assets/images/landing-m.webp';
import foundation from './assets/images/foundation.jpg';
import foundationmobile from './assets/images/foundation-m.webp';
import wall from './assets/images/wall.jpg';
import wallmobile from './assets/images/wall-m.webp';
import house from './assets/images/house.jpg';
import housemobile from './assets/images/house-m.webp';
import bricks from './assets/images/bricks.jpg';
import bricksmobile from './assets/images/bricks-m.webp';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/*  ============================================ -->
        <!--                    Hero                      -->
        <!-- ============================================ */}
        <Navbar />
        <section id='hero' className='hero'>
          <div className='hero__container'>
            <div className='hero__flexGroup'>
              <span className='hero__topper'>Foundations you can trust</span>
              <h1 className='hero__title'>Andy's Foundations</h1>
              <p className='hero__text'>
                Proudly Serving Kansas City Metro For Decades
              </p>
              <Link to='/contact' className='hero__buttonSolid'>
                Contact Us
              </Link>
            </div>
          </div>

          {/* <!-- Background Image --> */}
          <picture className='hero__picture' aria-hidden='true'>
            <source media='(max-width: 600px)' srcSet={landingmobile} />
            <source
              media='(min-width: 601px)'
              srcSet={landingwebp}
              type='image/webp'
            />
            <source
              media='(min-width: 601px)'
              srcSet={landing}
              type='image/jpeg'
            />
            <img
              loading='lazy'
              decoding='async'
              src={landing}
              alt='concrete wall with ladders against it'
              width='2250'
              height='1500'
            />
          </picture>
        </section>

        {/*  ============================================ -->
        <!--                  Info Bar                    -->
        <!-- ============================================ */}

        <section id='services' className='services'>
          <div className='services__card'>
            <picture>
              <img
                aria-hidden='true'
                decoding='async'
                src={marker}
                alt='marker'
                width='48'
                height='48'
                fill='white'
              />
            </picture>
            <h2>Locally Owned</h2>
            <p>Born and raised in Shawnee, KS</p>
          </div>
          <div className='services__card'>
            <picture>
              <img
                aria-hidden='true'
                decoding='async'
                src={calendar}
                alt='calendar'
                width='48'
                height='48'
                fill='white'
              />
            </picture>
            <h2>Experienced</h2>
            <p>Over 120 years combined experience</p>
          </div>
          <div className='services__card'>
            <picture>
              <img
                aria-hidden='true'
                decoding='async'
                src={dollar}
                alt='dollar'
                width='48'
                height='48'
              />
            </picture>
            <h2>Affordable</h2>
            <p>Affordable costs, professional quality</p>
          </div>
        </section>

        {/*  ============================================ -->
        <!--               Top Side By Side               -->
        <!-- ============================================ -->
        <!--                   About Us                   -->
        <!-- ============================================ */}

        <section id='sbs-top' className='sbsTop'>
          <div className='sbsTop__container'>
            {/* Left Image Section */}
            <div className='sbsTop__left'>
              <picture className='sbsTop__picture1' aria-hidden='true'>
                <source media='(max-width: 600px)' srcSet={wallmobile} />
                <source media='(min-width: 601px)' srcSet={wall} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={wall}
                  alt='exposed concrete wall'
                  width='522'
                  height='581'
                />
              </picture>
              <picture className='sbsTop__picture2' aria-hidden='true'>
                <source media='(max-width: 600px)' srcSet={foundationmobile} />
                <source media='(min-width: 601px)' srcSet={foundation} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={foundation}
                  alt='concrete foundation by lake'
                  width='414'
                  height='400'
                />
              </picture>
            </div>
            {/* Right Content Section */}
            <div className='sbsTop__right'>
              <span className='sbsTop__topper'>About Us</span>
              <h2 className='sbsTop__title'>About Andy's Foundations</h2>
              <p className='sbsTop__text'>
                Since our inception we've been serving the greater Kansas City
                Metro area. With a combined total of over 120 years experience
                among our senior staff, we have what it takes to get your
                project done. To see what we can do for you and your property,
                call or email us today.
              </p>
              <Link to='/about' className='buttonSolid'>
                About Our Team
              </Link>
            </div>
          </div>
        </section>

        {/*  ============================================ -->
        <!--             Bottom Side By Side              -->
        <!-- ============================================ -->
        <!--                   Services                   -->
        <!-- ============================================ */}

        <section id='sbs-bot' className='sbsBot'>
          <div className='sbsBot__container'>
            {/* <!-- Left Image Section --> */}
            <div className='sbsBot__left'>
              <picture className='sbsBot__picture1' aria-hidden='true'>
                <source media='(max-width: 600px)' srcSet={housemobile} />
                <source media='(min-width: 601px)' srcSet={house} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={house}
                  alt='stone wall'
                  width='414'
                  height='400'
                />
              </picture>
              <picture className='sbsBot__picture2' aria-hidden='true'>
                <source media='(max-width: 600px)' srcSet={bricksmobile} />
                <source media='(min-width: 601px)' srcSet={bricks} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={bricks}
                  alt='unfinished concrete wall'
                  width='522'
                  height='581'
                />
              </picture>
            </div>
            {/* <!-- Right Content Section--> */}
            <div className='sbsBot__right'>
              <span className='sbsBot__topper'>Services</span>
              <h2 className='sbsBot__title'>Residential and Commercial</h2>
              <p className='sbsBot__text'>
                Do you need a foundation laid for your new dream home? Andy's
                Foundations is here to see your project through. We will be
                there for each step: from the initial preparation of the site up
                to adding the final curing compound at a cost that your wallet
                can handle. We take pride in our work and we want you to take
                pride in your new home.
              </p>
              <p className='sbsBot__text'>
                Commercial projects come with a host of responsibilities and
                require a high level of dedication. Andy has the knowledge and
                experience necessary to tackle your commercial project head-on.
                When it comes to building foundations for a massive complex or a
                smaller Mom and Pop store, we will provide you with quality
                workmanship that is on-time and to your satisfaction.
              </p>
              <Link to='/contact/#' className='buttonSolid'>
                Get an estimate
              </Link>
            </div>
          </div>
        </section>
        <CTA />
        <Footer />
      </>
    );
  }
}
