
import React from 'react';
import lecture from '../../../images/lectures/vakf_lekcija.png'
import {importAll,resizeCoordinates} from '../../../Util'
const sounds = importAll(require.context('../../../sounds/vakf', false, /\.(wav)$/));


var elements = [{'coord': [304, 404, 181, 346], 'title': '1 ma haleka'}, {'coord': [484, 406, 384, 343], 'title': '2 ma halek'}, {'coord': [512, 339, 591, 406], 'title': '3 sevaaun'}, {'coord': [677, 337, 763, 408],'title': '4 sevaa'}, {'coord': [182, 461, 294, 524], 'title': '5 efvadjen'}, {'coord': [374, 461, 469, 527], 'title': '6 efvadja'}, {'coord': [496, 459, 588, 527], 'title': '7 dabhan'}, {'coord': [665, 457, 755, 529], 'title': '8 dabhaa'}, {'coord': [179, 645, 272, 711], 'title': '9 kaamuu'}, {'coord': [300, 644, 367, 712], 'title':'10 aamenna'}, {'coord': [405, 649, 485, 717], 'title': '11 diinii'}, {'coord': [517, 647, 624, 719], 'title': '12 husnaa'}, {'coord': [653, 648, 764, 721], 'title': '13 veabuduu'}, {'coord': [181, 804, 295, 875], 'title': '14 elkaariatu'}, {'coord': [381, 804, 493, 878], 'title': '15 elkariah'}, {'coord': [520, 805, 609, 877], 'title': '16 efideten'}, {'coord': [681, 805, 769, 877], 'title': '17 efideh'}];

export class Vakf_Lekcija extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            'areas':elements,
            'resized':true,
            'dimensions': {},
        }
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {

        console.log(img.width,img.height,img.naturalWidth,img.naturalHeight)
        if(this.state.resized && img.naturalHeight&&img.naturalWidth)
            this.setState( {'areas':resizeCoordinates(this.state.areas,img.naturalWidth,img.width,img.naturalHeight,img.height),'resized':false});
    }
 
    handleClick(e){
            e.preventDefault();
       
            var audio = document.getElementById('myAudio');
            audio.setAttribute('src',sounds[e.target.title]);
            audio.play();
        var img = document.getElementById('myImage')
        console.log(img.width,img.height,img.naturalWidth,img.naturalHeight)
        console.log(this.state.areas)
    }
    render(){
    return (
    <div  style={{height:"100%",width:"100%",position:"relative"}}>
<img onLoad={this.onImgLoad} id='myImage' style={{height:"100%",width:"100%",display:"block"}} src={lecture} useMap="image-map"/>
   
        <map name="image-map">
        {this.state.areas.map((el,id)=>
            <area key={id} onClick ={this.handleClick} target="" alt={el.title} title={el.title} coords={el['coord'].join(',')} shape="rect"/>
            )}
     
    </map>
    
        
    </div>
    );
    

    }
}
