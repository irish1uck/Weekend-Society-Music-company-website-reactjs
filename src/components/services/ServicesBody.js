import React from 'react';
import ReceptionBody from './sections/ReceptionBody';
import CocktailBody from './sections/CocktailBody';
import CeremonyBody from './sections/CeremonyBody';
import '../../styling/components/services/ServicesBody.css';
import { c_0020 } from '../../resources/ClassNames';

function ServicesBody () {
    return (
        <div className={c_0020}>
            <ReceptionBody 
                sectionContainerClass={'services__sectionContainer'}
                titleClass={'services__title'}
                mainSectionClass={'services__mainSection'}
                mainSectionId={'mainSection1'}
                columnClass={'services__mainSectionColumn'}
                imageClass={'services__mainSectionImage'} />
            <CocktailBody
                sectionContainerClass={'services__sectionContainer'}
                titleClass={'services__title'}
                subtitleTextClass={'services__titleUnderText'}
                mainSectionClass={'services__mainSectionCocktail'}
                columnClass={'services__mainSectionCocktailColumn'}
                videoContainerClass={'videos__video'}
                videoTitleClass={'videoTitle'}
                videoClass={'video'} />
            <CeremonyBody 
                sectionContainerClass={'services__sectionContainer'}
                titleClass={'services__title'}
                mainSectionClass={'services__mainSectionCeremony'}
                rowClass={'services__mainSectionCeremonyRow'}
                columnClass={'services__mainSectionCeremonyColumn'} />
        </div>
    );
}

export default ServicesBody;
