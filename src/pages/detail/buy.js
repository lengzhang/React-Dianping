import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import BuyAndStore from '../../components/detail/buy-and-store';

import * as storeAction from '../../actions/store';
import { getStore } from '../../reducers/store';
import { getUserName } from '../../reducers/user';

export class Buy extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        storeAction: PropTypes.object.isRequired,
        list: PropTypes.array.isRequired,
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isStore: false
        }
    }

    componentDidMount() {
        // 验证当前商户是否收藏
        const id = this.props.id;
        if (this.props.list.some((element) => {
            return element === id;
        })) {
            this.setState({
                isStore: true
            })
        }
    }

    // 检查登录状态
    loginCheck() {
        if (!this.props.username) {
            // 跳转到登录页面，以登录完了自己跳转回来
            this.props.history.push('/login');
            return false;
        }
        return true;
    }

    // 购买事件
    buyHandle() {
        // 验证登录，未登录则return
        if (!this.loginCheck()) {
            return;
        }

        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        this.props.history.push('/user');
    }

    // 收藏事件
    storeHandle() {
        // 验证登录，未登录则return
        if (!this.loginCheck()) {
            return;
        }

        if (this.state.isStore) {
            // 已经被收藏了，则取消收藏
            this.props.storeAction.rmStore(this.props.id);
        }
        else {
            // 未收藏，则添加到收藏中
            this.props.storeAction.addStore(this.props.id);
        }

        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })
    }

    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )

    }

}


const mapStateToProps = (state, props) => {
    return {
        list: getStore(state),
        username: getUserName(state)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        storeAction: bindActionCreators(storeAction, dispatch)
    }
}

Buy = connect(mapStateToProps, mapDispatchToProps)(Buy);

export default withRouter(Buy);
