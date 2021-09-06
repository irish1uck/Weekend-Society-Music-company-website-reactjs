import React from 'react';
import { 
    ContactBanner, 
    ContactBannerText, 
    ContactFormHeadline, 
    ContactHeadline, 
    Email, 
    EmailSource, 
    PhoneNumber, 
    PhoneNumberSource } from '../../resources/Strings';
import InquiryForm from './InquiryForm';
import Banner from '../subcomponents/Banner';
import ContactMethod from './ContactMethod';
import "../../styling/components/contact/ContactBody.css";
import { c_0018 } from '../../resources/ClassNames';

function ContactBody () {
    return (
        <div className={c_0018}>
            <Banner source={ContactBanner} alternate={ContactBannerText} />
            <div className='contactBody__headine'>{ContactHeadline}</div>
            <ContactMethod 
                methodClass={'contactBody__phone'}
                linkClass={'contactBody__click'} 
                source={PhoneNumberSource}
                text={PhoneNumber} />
            <ContactMethod 
                methodClass={'contactBody__info'}
                linkClass={'contactBody__click'} 
                source={EmailSource}
                text={Email} />
            <div className='contactBody__info2'>{ContactFormHeadline}</div>
            <InquiryForm />
        </div>
    );
}

export default ContactBody;
