import React from 'react';
import './OurTeam.css';
import TitleHeader from '../TitleHeader/TitleHeader';
import ProflieCard from '../ProflieCard/ProflieCard';

import Danial from '../../assets/Danial.png';
import Sanfole from '../../assets/Sanfole.png';
import Cesforila from '../../assets/Cesforila.png';
import Colleen from '../../assets/Colleen.png';
import Haldone from '../../assets/Haldone.png';
import Nik from '../../assets/Nik.png';

const OurTeam = () => {
  const dataprofile = [
    {
      srcImage: Danial,
      altImage: 'Danial',
      name: 'Danial Def',
      cases: '301 Cases',
    },
    {
      srcImage: Sanfole,
      altImage: 'Sanfole',
      name: 'Sanfole',
      cases: '850 Cases',
    },
    {
      srcImage: Cesforila,
      altImage: 'Cesforila',
      name: 'Cesforila',
      cases: '470 Cases',
    },
    {
      srcImage: Colleen,
      altImage: 'Colleen',
      name: 'Colleen',
      cases: '180 Cases',
    },
    {
      srcImage: Haldone,
      altImage: 'Haldone',
      name: 'Haldone',
      cases: '212 Cases',
    },
    {
      srcImage: Nik,
      altImage: 'Haldone',
      name: 'Nik Jeo',
      cases: '350 Cases',
    },
  ];

  return (
    <div className="ourteam__container">
      <div className="ourteam__info">
        <TitleHeader title={'Our Team'} />
      </div>

      <div className="ourteam__proflie">
        {dataprofile.map((profile, index) => (
          <ProflieCard
            key={index}
            srcImage={profile.srcImage}
            altImage={profile.altImage}
            name={profile.name}
            cases={profile.cases}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
