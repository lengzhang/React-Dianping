import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { concat } from 'lodash';

import List from '../../list';
import LoadMore from '../../../components/load-more';

import {getCityName} from '../../../reducers/user';

import { getSearchData } from '../../../fetch/search';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class SearchList extends React.Component {

    static propTypes = {
        cityName: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        keyword: PropTypes.string
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
        page, cityName, category, keyword
        let { page } = this.state;
        let { cityName, category, keyword } = this.props;
        let result = getSearchData(page, cityName, category, keyword);
        this.resultHandle(result);
    }

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        // 获取下一页数据
        let { page } = this.state;
        let { cityName, category, keyword } = this.props;
        const result = getSearchData(page, cityName, category, keyword);
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

SearchList = CSSModules(SearchList, styles);

const mapStateToProps = (state, props) => {
    return {cityName: getCityName(state)}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

SearchList = connect(mapStateToProps, mapDispatchToProps)(SearchList);

export default SearchList;
