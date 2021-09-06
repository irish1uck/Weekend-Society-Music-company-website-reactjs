import React from 'react';
import ReceptionBody from './sections/ReceptionBody';
import CocktailBody from './sections/CocktailBody';
import CeremonyBody from './sections/CeremonyBody';
import { ReceptionSectionId } from '../../resources/Strings';
import { 
    c_0020, 
    c_0099, 
    c_0100, 
    c_0101, 
    c_0102, 
    c_0103, 
    c_0104, 
    c_0105,
    c_0106, 
    c_0107,
    c_0108,
    c_0109,
    c_0110,
    c_0111,
    c_0112 } from '../../resources/ClassNames';
import '../../styling/components/services/ServicesBody.css';

function ServicesBody() {
    return (
        <div className={c_0020}>
            <ReceptionBody 
                sectionContainerClass={c_0099}
                titleClass={c_0100}
                mainSectionClass={c_0101}
                mainSectionId={ReceptionSectionId}
                columnClass={c_0102}
                imageClass={c_0103} />
            <CocktailBody
                sectionContainerClass={c_0099}
                titleClass={c_0100}
                subtitleTextClass={c_0104}
                mainSectionClass={c_0105}
                columnClass={c_0106}
                videoContainerClass={c_0107}
                videoTitleClass={c_0108}
                videoClass={c_0109} />
            <CeremonyBody 
                sectionContainerClass={c_0099}
                titleClass={c_0100}
                mainSectionClass={c_0110}
                rowClass={c_0111}
                columnClass={c_0112} />
        </div>
    );
}

export default ServicesBody;
