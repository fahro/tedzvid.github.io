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
            <Rodal visible={visible} onClose={onClose} width={1000} height={600} className="details">
                <div>
                  {item.details}
                </div>
            </Rodal>
        )
    }
}

export default Details;