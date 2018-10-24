import React from 'react';
import * as TAJWEED from '../components/Tajweed';

const data = [

  {
    name: "VAKF - stajanje prilikom učenja",
    lecture: <TAJWEED.Vakf_Lekcija/>,
    tutorial: <TAJWEED.Vakf_Vjezba/>,
  },
  {
    name: "DAMIR - izgovaranje zamjenice HU  هُ",
    lecture: <TAJWEED.Damir_Lekcija/>,
    tutorial: <TAJWEED.Damir_Vjezba/>,
  },
  {
    name: "LAFZATULLAH - izgovaranje riječi Allah اَللهُ",
    lecture: <TAJWEED.Laftzatullah_Lekcija/>,
    tutorial:<TAJWEED.Laftzatullah_Vjezba/>,
  },
  {
    name: "IDGAM MISLEJN - uklapanje istih harfova",
    lecture: <TAJWEED.Laftzatullah_Lekcija/>,
    tutorial: <TAJWEED.Laftzatullah_Lekcija/>
  },
  {
    name: "IDGAM MISLEJN MEAL-GUNNEH - uklapanje harfa M (م) u harf M (م) sa propuštanjem zraka kroz nos",
    lecture: <TAJWEED.Laftzatullah_Vjezba/>,
    tutorial: <TAJWEED.Laftzatullah_Vjezba/>,
  },

];

export default data;

