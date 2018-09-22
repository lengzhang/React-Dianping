import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

import Star from '../../../star';

export class OrderList extends React.Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            commentState: 2,  // commentState  0-未评价 1-评价中 2-已评价
            stars: {}
        }
    }

    componentDidMount() {
        // 将状态维护到 state 中
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    showComment() {
        // 显示输入框
        this.setState({
            commentState: 1
        })
    }
    submitComment() {
        // 获取操作函数
        const submitComment = this.props.submitComment
        // 获取id
        const id = this.props.data.id
        // 获取 star 数量
        const stars = this.state.stars
        const star = stars[id] || '0'
        // 获取评价内容
        const commentText = this.refs.commentText
        const value = commentText.value.trim()
        if (!value) {
            return
        }

        // 执行数据提交
        submitComment(id, value, star, this.commentOk.bind(this))
    }
    commentOk() {
        // 已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }
    hideComment() {
        // 隐藏输入框
        this.setState({
            commentState: 0
        })
    }
    starClickCallback(star) {
        let stars = this.state.stars
        const id = this.props.data.id
        stars[id] = star

        this.setState({
            stars: stars
        })
    }

    render() {
        const data = this.props.data

        return (
            <div styleName="order-item-container">
                <div className="clear-fix">
                    <div styleName="order-item-img" className="float-left">
                        <img src={data.img}/>
                    </div>
                    <div styleName="order-item-comment" className="float-left">
                        {
                            this.state.commentState === 0
                            // 未评价
                            ? <button styleName="btn" onClick={this.showComment.bind(this)}>评价</button>
                            :
                                this.state.commentState === 1
                                // 评价中
                                ? ''
                                // 已经评价
                                : <button styleName="btn unseleted-btn">已评价</button>
                        }
                    </div>
                    <div styleName="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                    ? <div styleName="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} styleName="comment-text" ref="commentText"></textarea>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <Star star={0} clickCallback={this.starClickCallback.bind(this)}/>
                        </div>
                        <button styleName="btn" onClick={this.submitComment.bind(this)}>提交</button>
                        &nbsp;
                        <button styleName="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ''
                }
            </div>
        )
    }

}

OrderList = CSSModules(OrderList, styles, {"allowMultiple":true});

export default OrderList;
