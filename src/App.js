import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import ListItem from './components/ListItem';
import Details from './components/Details';
import DATA from './data';
import soundfile from './sounds/vakf/3 sevaaun.wav';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: DATA,
            modal: {
                visible: false,
                item: {},
                isLecture:true,
              
            },
            zvuk_putanja:soundfile,
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        //this.show(DATA[0],true);
        document.title = "Tedzvid"
    }

    show(item,isLecture) {
        this.setState({
            modal: {
                visible: true,
                item,
                isLecture:isLecture,
            }
        });
    }

    hide() {
        this.setState({
            modal: {
                isLecture:this.state.modal.isLecture,
                visible: false,
                item: {},
            }
        });
    }

    handleSearch(event) {
        let {value} = event.target;
        value = value || '';
        const data = DATA.filter(item => item.name.toLowerCase().includes(value.toLowerCase())) ;
        this.setState({data});
    }
    
    render() {
        const {data, modal} = this.state;
        return (
            <div>
   
             <audio id="myAudio" ref={(zvuk) => { this.zvuk = zvuk; }} src={this.state.zvuk_putanja}></audio>
                <Header/>

                <div className="wrapper">
                    <div className="content">
                        <div className="list">
                            <div className="search-bar">
                                <input type="search" placeholder="Pretraga" onChange={this.handleSearch}/>
                            </div>
                            <div className="items">
                                {data.map((item, index) => <ListItem item={item} detailsClick={this.show} key={index}/>)}
                            </div>
                        </div>
                    </div>
                </div>

                <Details
                    visible={modal.visible}
                    item={modal.item}
                    onClose={this.hide}
                    isLecture={modal.isLecture}
                />
            </div>
        );
    }
}

export default App;
