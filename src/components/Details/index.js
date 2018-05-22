import React from 'react';
import Rodal from 'rodal';
import './style.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {visible, item, onClose} = this.props;
        return (
            <Rodal visible={visible} onClose={onClose} width={800} className="details">
                <div className="title">
                    {item.name}
                </div>
                <div>
                  {item.details}
                </div>
            </Rodal>
        )
    }
}

export default Details;