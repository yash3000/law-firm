import React from 'react';
import './AreaOfPractices.css';
import TitleHeader from '../TitleHeader/TitleHeader';

import BusinessLaw from '../../assets/BusinessLaw.png';
import BusinessLaw1 from '../../assets/BusinessLaw1.png';
import PartnershipLAW from '../../assets/PartnershipLAW.png';
import RealEstateLaw from '../../assets/RealEstateLaw.png';
import LandLord_Disputes from '../../assets/LandLord_Disputes.png';
import Elder_Abuse from '../../assets/Elder_Abuse.png';

const AreaOfPractices = () => {
  return (
    <div className="area__container" id="praticeareas">
      <div className="area__info">
        <TitleHeader title={'Area of Practices'} />
      </div>

      <div className="area__wrapper">
        <div className="area__grid-container">
          <div className="grid-item1">
            <div className='grid-item-display-content'>BUISNESS LAW</div>
            <img src={BusinessLaw} alt="BusinessLaw" />
          </div>
          <div className="grid-item2">
          <div className='grid-item-display-content'>PARTNERSHIP LAW</div>
            <img src={PartnershipLAW} alt="PartnershipLAW" />
          </div>
          <div className="grid-item3">
          <div className='grid-item-display-content'>REAL ESTATE LAW</div>
            <img src={RealEstateLaw} alt="RealEstateLaw" />
          </div>
          <div className="grid-item4">
          <div className='grid-item-display-content'>BUISNESS LAW</div>
            <img src={BusinessLaw1} alt="PartnershipLAW" />
          </div>
          <div className="grid-item5">
          <div className='grid-item-display-content'>LANDLORD DISPUTES</div>
            <img src={LandLord_Disputes} alt="RealEstateLaw" />
          </div>
          <div className="grid-item6">
          <div className='grid-item-display-content'>ELDER ABUSE</div>
            <img src={Elder_Abuse} alt="PartnershipLAW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractices;
