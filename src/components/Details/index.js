import React from 'react';
import Rodal from 'rodal';
import './style.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {visible, item, onClose,isLecture} = this.props;
        return (
            <Rodal  visible={visible} onClose={onClose} width={900} height={600} className="details">
                <div style={{height:"100%",width:"100%"}}>
                    {console.log("ISLECTURE:::",isLecture)}
                  {isLecture?item.lecture:item.tutorial}
                </div>
            </Rodal>
        )
    }
}

export default Details;