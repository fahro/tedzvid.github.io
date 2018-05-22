import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import ListItem from './components/ListItem';
import Details from './components/Details';
import DATA from './data';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: DATA,
            modal: {
                visible: false,
                item: {}
            }
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.show(DATA[0]);
    }

    show(item) {
        this.setState({
            modal: {
                visible: true,
                item
            }
        });
    }

    hide() {
        this.setState({
            modal: {
                visible: false,
                item: {}
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
                />
            </div>
        );
    }
}

export default App;
