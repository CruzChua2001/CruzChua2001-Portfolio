import React from 'react';

import Introduction from './Introduction';
import AppIcons from './AppIcons';
import WorkExperienceIcon from './WorkExperienceIcon';
import Contact from './Contact';

const Home = _ => {
    return (
        <div class="home-container">
            <div class="home-top">
                <Introduction />
                <AppIcons />
            </div>
            <div class="home-right">
                <WorkExperienceIcon size="lg" />
            </div>
            <div class="home-bottom">
                <Contact />
            </div>
        </div>
    )
}

export default Home;