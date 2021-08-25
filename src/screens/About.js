import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styling/About.css';

function About() {
    return (
        <div className='about__page'>
            <Header className='contact__header'/>
            <div className='about__container'>
                <img 
                    className='about__imageTop' 
                    src='/aboutMain.png' 
                    alt='The Weekend Society Music Group' />
                <div className='about__bio'>
                    <div className='about__bandBioText'>
                        The Weekend Society is a high energy dance band committed to
                        making the best day of your  life, the actual best day of your 
                        life, and will effortlessly take your event from dinner all 
                        the way through to the dance party. Based in Los Angeles, we 
                        offer not only a wealth of talent but also  a wide range of 
                        genres and band sizes to custom fit your special occasion. 
                        Our members bring their passion, joy, and love for live music, 
                        as well as years of experience sharing the stage with artists 
                        such as Gwen Stefani, Kanye West, John Legend, Jennifer Hudson, 
                        and Andy Grammer. 
                        <br />
                        <br />
                        To complement your reception, we bring along event lighting and a 
                        premium sound system in addition to  MC services. A cocktail hour 
                        trio, quartet, or quintet can join your celebration and provide an 
                        ambient, jazzy background as you sip your favorite spirits. We also 
                        offer ceremony musicians and love to travel. Book The Weekend today!
                    </div>
                </div>
                <div className='about__bio'>
                    <img 
                        className='about__isaacImage'
                        src='/isaacpic.png'
                        alt='portrait of isaac' />
                    <div className='about__isaacColumn'>
                        <div className='about__isaacName'>Isaac Johnson, Owner</div>
                        <div className='about__isaacBioText'>
                            Born and raised in Los Angeles with a Bachelors in Music Performance, 
                            Isaac has performed at countless weddings, private events, corporate 
                            and special celebrations. Isaac is an avid lover of cinema, enjoys 
                            making craft cocktails, and is absolutely in love with his  3 year old 
                            daughter. 
                        </div>
                    </div>
                </div>
            </div>
            <Footer className='contact__footer' />
        </div>
    )
}

export default About;
