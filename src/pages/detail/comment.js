import React from 'react';
import PropTypes from 'prop-types';

import { concat } from 'lodash';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

import { getCommentData } from '../../fetch/detail';

import CommentList from '../../components/comment-list';

export class Comment extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired
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
        let result = getCommentData(this.state.page, this.props.id)
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
        const result = getCommentData(page, this.props.id)
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
                console.error('详情页获取用户评论数据出错, ', ex.message)
            }
        })
    }

    render() {
        return (
            <div styleName="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ?
                    <CommentList data={this.state.data}/>
                    :
                    <div>加载评论中...</div>
                }
            </div>
        )

    }

}

Comment = CSSModules(Comment, styles);

export default Comment;
