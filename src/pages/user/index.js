import React from 'react';

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// http://blog.csdn.net/ISaiSai/article/details/78094556
import {withRouter} from 'react-router-dom';

// 壳组件
import Shell from '../../components/shell';
import Meta from '../../components/meta';

import { getUserName, getCityName } from '../../reducers/user';

import UserInfo from '../../components/user/user-info';
import OrderList from '../../components/user/order-list';''

export class User extends React.Component {

    // 服务端渲染
    // 加载需要在服务端渲染的数据
    static loadData({store, match}) {
        return new Promise(async function(resolve, reject) {

            /* 敲黑板～ 这里是重点～～～～～～～～～～～（为了引起你的注意，我写了这句话） */

            /**
       * 这里的 loadPostsList 方法，是在服务端加载 posts 数据，储存到 redux 中。
       * 这里对应的组件是 PostsList，PostsList组件里面也有 loadPostsList 方法，但它是在客户端执行。
       * 然后，服务端在渲染 PostsList 组件的时候，我们会先判断如果redux中，是否存在该条数据，如果存在，直接拿该数据渲染
       */

            resolve({code: 200});
        })
    }

    static propTypes = {
        username: PropTypes.string.isRequired,
        cityName: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.username === '') {
            this.props.history.replace('/login');
        }
    }

    render() {
        return (
            <div>
                <UserInfo username={this.props.username} cityName={this.props.cityName} />
                <OrderList username={this.props.username} />
            </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        username: getUserName(state),
        cityName: getCityName(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

User = connect(mapStateToProps, mapDispatchToProps)(User);

User = withRouter(User);

export default Shell(User);
