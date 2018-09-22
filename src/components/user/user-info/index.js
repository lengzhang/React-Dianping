import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class UserInfo extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div styleName="userinfo-container">
                <p>
                    <i className="fas fa-user"></i>
                    &nbsp;
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="fas fa-map-marker-alt"></i>
                    &nbsp;
                    <span>{this.props.cityName}</span>
                </p>
            </div>
        )

    }

}

UserInfo = CSSModules(UserInfo, styles);

export default UserInfo;
