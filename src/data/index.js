
          import React from 'react';
  import * as TAJWEED from '../components/Tajweed';

  const data = [

  
     {    
     name: "VAKF - stajanje prilikom učenja",
    lecture: <TAJWEED.Vakf_Lekcija changeSoundPath={this.changeSoundPath}/>,
    tutorial: <TAJWEED.Vakf_Vjezba/>,
  },
    
     {    
     name: "DAMIR - izgovaranje zamjenice HU  هُ",
    lecture: <TAJWEED.Damir_Lekcija/>,
    tutorial: <TAJWEED.Damir_Vjezba/>,
  },
    
     {    
     name: "LAFZATULLAH - izgovaranje riječi Allah اَللهُ",
    lecture: <TAJWEED.Lafzatullah_Lekcija/>,
    tutorial: <TAJWEED.Lafzatullah_Vjezba/>,
  },
    
     {    
     name: "IDGAM MISLEJN - uklapanje istih harfova",
    lecture: <TAJWEED.Idgam_Mislejn_Lekcija/>,
    tutorial: <TAJWEED.Idgam_Mislejn_Vjezba/>,
  },
    
     {    
     name: "IDGAM MISLEJN MEAL_GUNNEH - uklapanje harfa M (م) u harf M (م) sa propuštanjem zraka kroz nos",
    lecture: <TAJWEED.Idgam_Mislejn_Meal_Gunneh_Lekcija/>,
    tutorial: <TAJWEED.Idgam_Mislejn_Meal_Gunneh_Vjezba/>,
  },
    
     {    
     name: "IDGAM MEAL_GUNNEH - uklapanje sa propuštanjem zraka kroz nos",
    lecture: <TAJWEED.Idgam_Meal_Gunneh_Lekcija/>,
    tutorial: <TAJWEED.Idgam_Meal_Gunneh_Vjezba/>,
  },
    
     {    
     name: "IDGAM BILA GUNNEH - uklapanje bez propuštanja zraka kroz nos",
    lecture: <TAJWEED.Idgam_Bila_Gunneh_Lekcija/>,
    tutorial: <TAJWEED.Idgam_Bila_Gunneh_Vjezba/>,
  },
    
     {    
     name: "IKLAB - pretvaranje harfa N (ن) u harf M (م)",
    lecture: <TAJWEED.Iklab_Lekcija/>,
    tutorial: <TAJWEED.Iklab_Vjezba/>,
  },
    
     {    
     name: "IZHAR HALKIJJ - čisto izgovaranje harfa N (ن) ili tenvina",
    lecture: <TAJWEED.Izhar_Halkijj_Lekcija/>,
    tutorial: <TAJWEED.Izhar_Halkijj_Vjezba/>,
  },
    
     {    
     name: "IZHAR SEFEVIJJ - čisto izgovaranje harfa M (م)",
    lecture: <TAJWEED.Izhar_Sefevijj_Lekcija/>,
    tutorial: <TAJWEED.Izhar_Sefevijj_Vjezba/>,
  },
    
     {    
     name: "IHFA - skrivanje harfa N (ن)",
    lecture: <TAJWEED.Ihfa_Lekcija/>,
    tutorial: <TAJWEED.Ihfa_Vjezba/>,
  },
    
     {    
     name: "IHFA SEFEVIJJ - skrivanje harfa M (م)",
    lecture: <TAJWEED.Ihfa_Sefevijj_Lekcija/>,
    tutorial: <TAJWEED.Ihfa_Sefevijj_Vjezba/>,
  },
    
     {    
     name: "KALKALA - odskakanje harfova",
    lecture: <TAJWEED.Kalkala_Lekcija/>,
    tutorial: <TAJWEED.Kalkala_Vjezba/>,
  },
    
     {    
     name: "HUKMU RA KRUPNO - izgovaranje harfa R (ر)",
    lecture: <TAJWEED.Hukmu_Ra_Krupno_Lekcija/>,
    tutorial: <TAJWEED.Hukmu_Ra_Krupno_Vjezba/>,
  },
    
     {    
     name: "HUKMU RA TANKO - izgovaranje harfa R (ر)",
    lecture: <TAJWEED.Hukmu_Ra_Tanko_Lekcija/>,
    tutorial: <TAJWEED.Hukmu_Ra_Tanko_Vjezba/>,
  },
    
     {    
     name: "IDGAM MUTEDZANISEJN - uklapanje srodnih harfova",
    lecture: <TAJWEED.Idgam_Mutedzanisejn_Lekcija/>,
    tutorial: <TAJWEED.Idgam_Mutedzanisejn_Vjezba/>,
  },
    
     {    
     name: "IDGAM MUTEKARIBEJN - uklapanje bliskih harfova",
    lecture: <TAJWEED.Idgam_Mutekaribejn_Lekcija/>,
    tutorial: <TAJWEED.Idgam_Mutekaribejn_Vjezba/>,
  },
    
     {    
     name: "MEDD TABIJJ  -  obična dužina",
    lecture: <TAJWEED.Medd_Tabijj__Lekcija/>,
    tutorial: <TAJWEED.Medd_Tabijj__Vjezba/>,
  },
    
     {    
     name: "MEDD MUTTESIL - spojena dužina",
    lecture: <TAJWEED.Medd_Muttesil_Lekcija/>,
    tutorial: <TAJWEED.Medd_Muttesil_Vjezba/>,
  },
    
     {    
     name: "MEDD MUNFESIL - rastavljena dužina",
    lecture: <TAJWEED.Medd_Munfesil_Lekcija/>,
    tutorial: <TAJWEED.Medd_Munfesil_Vjezba/>,
  },
    
     {    
     name: "MEDD LAZIM - stalna dužina",
    lecture: <TAJWEED.Medd_Lazim_Lekcija/>,
    tutorial: <TAJWEED.Medd_Lazim_Vjezba/>,
  },
    
     {    
     name: "MEDD ARID - nestalna dužina",
    lecture: <TAJWEED.Medd_Arid_Lekcija/>,
    tutorial: <TAJWEED.Medd_Arid_Vjezba/>,
  },
    
     {    
     name: "MEDD LIN - poluvokalna dužina",
    lecture: <TAJWEED.Medd_Lin_Lekcija/>,
    tutorial: <TAJWEED.Medd_Lin_Vjezba/>,
  },
     

];

export default data;

        