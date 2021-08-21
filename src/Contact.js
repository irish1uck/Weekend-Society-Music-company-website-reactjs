import React, { useState } from 'react';
import Header from "./Header";
import './Contact.css'
import emailjs from 'emailjs-com';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [eventLength, setEventLength] = useState('');
    const [notes, setNotes] = useState('');
    const [heardAbout, setHeardAbout] = useState('');

    const renderHeader = () => {
        return (
            <div className='contact__header'>
                <Header />
            </div>
        );
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('weekend_society_form', 'weekend_society_email', e.target, 'user_BgakDUbNo9ThPcGN0y1JT')
        .then((result) => {
            console.log(result.text);
            setName('');
            setPhone('');
            setEmail('');
            setEventType('');
            setEventDate('');
            setEventLocation('');
            setEventLength('');
            setNotes('');
            setGuestCount('');
            setHeardAbout('');
            alert('Your information has been sent\nYou will hear from us soon')
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong. Please try again.')
        });
    }

    const renderForm = () => {
        return (
            <form
                className='contact__form' 
                onSubmit={sendEmail}>
                <div className='contact__formRow'>
                    <input 
                        placeholder='Your Name'
                        className='contact__formInputA'
                        name='name'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required 
                    />
                    <input 
                        placeholder='Phone Number'
                        className='contact__formInputA'
                        type='text'
                        name='phone'
                        minLength={10}
                        value={phone}
                        onChange={e => setPhone(e.target.value)} 
                        required
                    />
                </div>
                <input
                    placeholder='Email Address'
                    className='contact__formInputB'
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <div className='contact__formRow'>
                    <input 
                        placeholder='Event Type'
                        className='contact__formInputA'
                        type='text'
                        name='eventType'
                        value={eventType}
                        onChange={e => setEventType(e.target.value)} 
                    />
                    <input 
                        placeholder='Event Date'
                        className='contact__formInputA'
                        type='text'
                        name='eventDate'
                        value={eventDate}
                        onChange={e => setEventDate(e.target.value)} 
                    />
                </div>
                <div className='contact__formRow'>
                    <input 
                        placeholder='Event Location'
                        className='contact__formInputA'
                        type='text'
                        name='eventLocation'
                        value={eventLocation}
                        onChange={e => setEventLocation(e.target.value)} 
                    />
                    <input 
                        placeholder='Event Length'
                        className='contact__formInputA'
                        type='text'
                        name='eventLength'
                        value={eventLength}
                        onChange={e => setEventLength(e.target.value)} 
                    />
                </div>    
                <input 
                    placeholder='Notes or other details'
                    className='contact__formInputB'
                    type='text'
                    name='notes'
                    value={notes}
                    onChange={e => setNotes(e.target.value)} 
                />
                <div className='contact__formRow'>
                    <input
                        placeholder='Guest Count' 
                        className='contact__formInputA'
                        type='text'
                        name='guestCount'
                        value={guestCount}
                        onChange={e => setGuestCount(e.target.value)} 
                    />
                    <input 
                        placeholder='How did you hear about us?'
                        className='contact__formInputA'
                        type='text'
                        name='heardAbout'
                        value={heardAbout}
                        onChange={e => setHeardAbout(e.target.value)} 
                    />
                </div>
                <input className='contact__formSubmit' type='submit' value='Submit' />
            </form>
        );
    }

    return (
        <div className='contact__page'>
            {renderHeader()}
            <div className='contact__container'>
                <img 
                    className='contact__imageTop' 
                    src='/contactMain.jpg' 
                    alt='Guy and girl dancing' />
                <div className='contact__infoHeader'>Contact us at:</div>
                <div className='contact__info'>
                    <a href='tel:+13238802005' className='infoContact__click'>(323) 880-2005</a>
                </div>
                <div className='contact__info'>
                    <a href="mailto:hello@weekendsocietymusic.com" className='infoContact__click'>hello@weekendsocietymusic.com</a>
                </div>
                <div className='contact__info'>
                    or fill out the information below:
                </div>
                {renderForm()}
                <div className='contact__socialMedia'>
                    <a 
                        href='https://www.instagram.com/weekendsocietymusic/'
                        className='footer__solicalMediaLink'>
                        <IconButton>
                            <InstagramIcon 
                                fontSize='large' 
                                className='footer__socialMediaIcon' />
                        </IconButton>
                    </a>
                    <a
                        href='https://m.facebook.com/weekendsocietymusic'
                        className='footer__solicalMediaLink'>
                        <IconButton>
                            <FacebookIcon 
                                fontSize='large' 
                                className='footer__socialMediaIcon' />
                        </IconButton>
                    </a>
                </div>
                <div className='contact__infoLine'>
                    The Weekend Society is located in Los Angeles and loves to travel
                </div>
            </div>
        </div>
    );
}

export default Contact;

