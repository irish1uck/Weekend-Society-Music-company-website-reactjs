import React from 'react';
import { c_0045, c_0046 } from '../../../resources/ClassNames';
import { BookNow, EmailSource } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/FooterButton.css";

function FooterButton () {
    return (
        <button className={c_0045}>
            <a href={EmailSource} className={c_0046}>{BookNow}</a>
        </button>
    );
}

export default FooterButton;
