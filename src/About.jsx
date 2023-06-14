import React, { Component } from 'react';
//Components
import Navbar from './components/Navbar';
import CTA from './components/CTA';
import Footer from './components/Footer';
//Styles
import './styles/About.css';
//Images
import hero from './assets/images/hero.jpg';
import heromobile from './assets/images/hero-m.jpg';
import foundation from './assets/images/foundation.jpg';
import foundationmobile from './assets/images/foundation-m.webp';
import workers from './assets/images/workers.jpg';
import workersmobile from './assets/images/workers-m.webp';
import andy from './assets/images/andy.jpg';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/*  ============================================ -->
        <!--                    LANDING                   -->
        <!-- ============================================ */}

        <Navbar />
        <section id='int-hero'>
          <h1 id='home-h'>About Us</h1>
          <picture>
            <source media='(max-width: 600px)' srcset={heromobile} />
            <source media='(min-width: 601px)' srcset={hero} />
            <img
              aria-hidden='true'
              decoding='async'
              src={hero}
              width='400'
              height='662'
              alt='concrete wall with ladders against it'
            />
          </picture>
        </section>

        {/*  ============================================ -->
        <!--              About Side By Side              -->
        <!-- ============================================ */}

        <section id='about' className='about'>
          <div className='about__container'>
            {/* Left Image Section */}
            <div className='about__left'>
              <picture
                className='about__picture about__picture-1'
                aria-hidden='true'>
                <source media='(max-width: 600px)' srcset={foundationmobile} />
                <source media='(min-width: 601px)' srcset={foundation} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={foundation}
                  alt='house foundation'
                  width='522'
                  height='581'
                />
              </picture>
              <picture
                className='about__picture about__picture-2'
                aria-hidden='true'>
                <source media='(max-width: 600px)' srcset={workersmobile} />
                <source media='(min-width: 601px)' srcset={workers} />
                <img
                  loading='lazy'
                  decoding='async'
                  src={workers}
                  alt='7 workers standing on concrete'
                  width='414'
                  height='400'
                />
              </picture>
            </div>

            {/* Right Content Section */}
            <div className='about__right'>
              <h2 className='about__title'>Management</h2>
              <div className='about__owner'>
                <div className='about__owner-info'>
                  <h3 className='about__name'>Andy Downey</h3>
                  <span className='about__desc'>Owner</span>
                </div>
                <img
                  className='about__owner-image'
                  src={andy}
                  alt='image of andy the owner'
                />
              </div>
              <p className='about__text'>
                Andy began his career in the concrete construction industry as a
                teen working for his father, William Downey, the founder of
                Downey Foundation Inc., located in the Shawnee/Merriam KS area.
                At the time of his father's retirement in 1985, Andy was named
                President and ran his father's business for many years. Andy
                began his own concrete construction business known as Andy's
                Foundations LLC in 2018. The four longest-tenured employees at
                Andy's Foundations LLC began their careers with Downey
                Foundation Inc. and have a combined 120 years of experience in
                the industry.
              </p>
              <h3 className='about__name'>Roger Downey</h3>
              <span className='about__desc'>Foreman</span>
              <p className='about__text'>
                Roger also began his career in the family business of concrete
                construction as a teen at Downey Foundation Inc. At the time of
                the corporation's leadership change, Roger was promoted as
                Foreman of the construction crew and has been highly
                instrumental in the quality work that Downey Foundation Inc. and
                Andy's Foundations LLC have generated over the past few decades.
              </p>
              <h3 className='about__name'>Debra Kimble</h3>
              <span className='about__desc'>Office Manager</span>
              <a
                href='mailto:debra@downeyfoundation.com'
                className='about__email'>
                debra@downeyfoundation.com
              </a>
              <p className='about__text'>
                Debra has been our office manager and bookkeeper since 2013.
                Feel free to contact her with any questions regarding services
                offered, plan submissions, etc. Debra can be contacted by email
                or by phone at 913-962-6644.
              </p>
            </div>
          </div>
        </section>
        <CTA />
        <Footer />
      </>
    );
  }
}
