import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCityName} from '../../../reducers/user';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class CurrentCity extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div styleName="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        )

    }

}

CurrentCity = CSSModules(CurrentCity, styles);

const mapStateToProps = (state, props) => {
    return {cityName: getCityName(state)}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

CurrentCity = connect(mapStateToProps, mapDispatchToProps)(CurrentCity);

export default CurrentCity;
