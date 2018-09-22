import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class Star extends React.Component {

    static propTypes = {
        star: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let star = this.props.star || 0;
        if (star > 5) {
            star = star % 5;
        }
        return (
            <div styleName="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = star >= item ? ' light' : ''
                    return <i key={index} className="fas fa-star" styleName={lightClass}></i>
                })}
            </div>
        )

    }

}

Star = CSSModules(Star, styles);

export default Star;
