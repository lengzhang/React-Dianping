import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { concat } from 'lodash';

import List from '../../list';
import LoadMore from '../../load-more';

import {getCityName} from '../../../reducers/user';

import { getListData } from '../../../fetch/home';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class HomeList extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    componentDidMount() {
        // 获取首页数据
        let result = getListData(this.props.cityName, this.state.page)
        this.resultHandle(result);
    }

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        // 获取下一页数据
        const page = this.state.page
        const result = getListData(this.props.cityName, page)
        this.resultHandle(result)

        // 增加 page 技术
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    // 处理数据
    resultHandle(result) {
        result.then(response => response.json())
        .then(res => {
            this.setState({
                hasMore: res.hasMore,
                data: concat(this.state.data, res.data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
            }
        })
    }

    render() {
        return (
            <div>
                <h2 styleName="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ?
                    <List data={this.state.data} />
                    :
                    <div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ?
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
}

HomeList = CSSModules(HomeList, styles);

const mapStateToProps = (state, props) => {
    return {cityName: getCityName(state)}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

HomeList = connect(mapStateToProps, mapDispatchToProps)(HomeList);

export default HomeList;
