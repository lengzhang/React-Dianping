import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './item';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class List extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div styleName="list-container">
                {
                    this.props.data.map((item, index) => {
                        return (
                            <ListItem key={index} data={item} />
                        )
                    })
                }
            </div>
        )

    }

}

List = CSSModules(List, styles);

export default List;
