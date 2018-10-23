import React from 'react';
import * as TAJWEED from '../components/Tajweed';

const data = [
  {
    name: "DAMIR - izgovaranje zamjenice HU  هُ",
    lecture: <TAJWEED.Damir/>,
    tutorial: <TAJWEED.Damir/>,
  },
  {
    name: "LAFZATULLAH - izgovaranje riječi Allah اَللهُ",
    lecture: <TAJWEED.Laftzatullah_Lecture/>,
    tutorial:<TAJWEED.Laftzatullah_Tutorial/>,
  },
  {
    name: "IDGAM MISLEJN - uklapanje istih harfova",
    lecture: <TAJWEED.Laftzatullah_Lecture/>,
    tutorial: <TAJWEED.Laftzatullah_Lecture/>
  },
  {
    name: "IDGAM MISLEJN MEAL-GUNNEH-uklapanje istih harfova",
    lecture: <TAJWEED.Laftzatullah_Tutorial/>,
    tutorial: <TAJWEED.Laftzatullah_Tutorial/>,
  }
];

export default data;

