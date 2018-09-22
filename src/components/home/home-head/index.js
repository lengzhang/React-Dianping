import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCityName, getUserName} from '../../../reducers/user';

import SearchInput from '../../search/search-input';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class HomeHead extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    enterHandle(value) {
        console.log(value);
        if (value != '') {
            this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
        }
    }

    render() {

        return (
            <header>
                <div className="clear-fix" styleName="home-header">
                    <div className="float-left" styleName="home-header-left">
                        <Link to="/city">
                            <span>{this.props.cityName}</span>
                            &nbsp;
                            <i className="fas fa-angle-down"></i>
                        </Link>
                    </div>
                    <div className="float-right"  styleName="home-header-right">
                        {
                            this.props.username === ''
                            ?
                            <Link to="/login">
                                <i className="fas fa-sign-in-alt"></i>
                            </Link>
                            :
                            <Link to="/user">
                                <i className="fas fa-user"></i>
                            </Link>
                        }
                    </div>
                    <div styleName="home-header-middle">
                        <SearchInput value='' enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </header>
        )

    }

}

HomeHead = CSSModules(HomeHead, styles);

const mapStateToProps = (state, props) => {
    return {
        cityName: getCityName(state),
        username: getUserName(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

HomeHead = connect(mapStateToProps, mapDispatchToProps)(HomeHead);

export default HomeHead;
