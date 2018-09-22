import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getUserName} from '../../../reducers/user';

import SearchInput from '../search-input';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class SearchHead extends React.Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    BackHandle() {
        this.props.history.goBack();
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
                    <span className="float-left" styleName="home-header-left" onClick={this.BackHandle.bind(this)}>
                        <i className="fas fa-chevron-left"></i>
                        &nbsp; 返回
                    </span>
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

SearchHead = CSSModules(SearchHead, styles);

const mapStateToProps = (state, props) => {
    return {
        username: getUserName(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

SearchHead = connect(mapStateToProps, mapDispatchToProps)(SearchHead);

export default SearchHead;
