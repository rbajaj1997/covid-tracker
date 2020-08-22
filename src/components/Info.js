import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import home from '../img/home.svg';
import hands from '../img/hands.svg';
import distance from '../img/distance.svg';
import mask from '../img/mask.svg';
import medical from '../img/medical.svg';
import sneeze from '../img/sneeze.svg';

import fever from '../img/fever.svg';
import cough from '../img/cough.svg';
import fatigue from '../img/fatigue.svg';
import ache from '../img/ache.svg';
import sorethroat from '../img/sorethroat.svg';
import Diarrhea from '../img/Diarrhea.svg';
import Conjunctivitis from '../img/Conjunctivitis.svg';
import headache from '../img/headache.svg';
import rash from '../img/rash.svg';


export default function Info() {
    return <div className="info">
        <Tabs>
            <TabList>
                <Tab>Prevention</Tab>
                <Tab>Symptoms</Tab>
            </TabList>

            <TabPanel className="prevention">
                <div className="prevention-icons">
                    <div className="icon">
                        <img src={home} alt="stay-home" />
                        <span className="icon__head">Stay at home</span>
                        <span className="icon__text">as much as you can.</span>
                    </div>

                    <div className="icon">
                        <img src={distance} alt="social-distance" />
                        <span className="icon__head">Observe social distancing</span>
                        <span className="icon__text">from others around you.</span>
                    </div>

                    <div className="icon">
                        <img src={hands} alt="wash-hands" />
                        <span className="icon__head">Wash your hands often</span>
                        <span className="icon__text">Use soap and water, or an alcohol-based hand rub.</span>
                    </div>

                    <div className="icon">
                        <img src={mask} alt="wear-mask" />
                        <span className="icon__head">Wear a mask</span>
                        <span className="icon__text">when physical distancing is not possible.</span>
                    </div>

                    <div className="icon">
                        <img src={sneeze} alt="cover-sneeze" />
                        <span className="icon__head">Cover your cough / sneezee</span>
                        <span className="icon__text">with your bent elbow or a tissue.</span>
                    </div>

                    <div className="icon">
                        <img src={medical} alt="medical" />
                        <span className="icon__head">Seek medical attention</span>
                        <span className="icon__text">if you have a fever, cough and difficulty breathing.</span>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className="symptoms">
                <div className="symtoms-icons">
                    <div className="icon">
                        <img src={fever} alt="fever" />
                        <span className="icon__head">Fever</span>
                    </div>

                    <div className="icon">
                        <img src={cough} alt="cough" />
                        <span className="icon__head">Dry Cough</span>
                    </div>

                    <div className="icon">
                        <img src={fatigue} alt="fatigue" />
                        <span className="icon__head">Fatigue</span>
                    </div>

                    <div className="icon">
                        <img src={ache} alt="ache" />
                        <span className="icon__head">Aches and Pains</span>
                    </div>

                    <div className="icon">
                        <img src={sorethroat} alt="sore-throat" />
                        <span className="icon__head">Sore Throat</span>
                    </div>

                    <div className="icon">
                        <img src={Diarrhea} alt="Diarrhea" />
                        <span className="icon__head">Diarrhea</span>
                    </div>

                    <div className="icon">
                        <img src={Conjunctivitis} alt="Conjunctivitis" />
                        <span className="icon__head">Conjunctivitis</span>
                    </div>

                    <div className="icon">
                        <img src={headache} alt="headache" />
                        <span className="icon__head">Headache</span>
                    </div>

                    <div className="icon">
                        <img src={rash} alt="rash" />
                        <span className="icon__head">Rash on Skin / Discoloration of Fingers or Toes</span>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    </div>
}
