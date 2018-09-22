import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCityName, getUserName} from '../../reducers/user';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class Head extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        console.log(this.props.username);
    }

    componentDidMount() {
        let path = this.props.match.path;
        let title = '404,无法找到该页面';
        console.log(this.props.match.params);
        if (/^\/city$/.test(path)) {
            title = '选择城市';
        }
        else if (/^\/detail\/.+$/.test(path)) {
            title = '商户详情';
        }
        else if (/^\/user$/.test(path)) {
            title = '用户中心';
        }
        else if (/^\/login$/.test(path)) {
            title = '登录';
        }
        this.setState({
            title
        });
    }

    BackHandle() {
        this.props.history.goBack();
    }

    render() {

        return (
            <header>
                <div className="clear-fix" styleName="home-header">
                    <div className="float-left" styleName="home-header-left">
                        <span onClick={this.BackHandle.bind(this)}>
                            <i className="fas fa-chevron-left"></i>
                            &nbsp; 返回
                        </span>
                    </div>
                    <h1 styleName="home-header-middle">{this.state.title}</h1>
                </div>
            </header>
        )

    }

}

Head = CSSModules(Head, styles);

const mapStateToProps = (state, props) => {
    return {
        cityName: getCityName(state),
        username: getUserName(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

Head = connect(mapStateToProps, mapDispatchToProps)(Head);

export default Head;
