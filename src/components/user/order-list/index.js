import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

import Item from './item';

import { getOrderListData, postComment } from '../../../fetch/user/orderlist';

export class OrderList extends React.Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getOrderListData(this.props.username)
        .then(response => response.json())
        .then(res => {
            this.setState({
                data: res
            })
        })
    }

    submitComment(id , value, star, callback) {
        postComment(id, value, star)
        .then(response => response.json())
        .then(res => {
            if (res.errno === 0) {
                callback()
            }
        })
    }

    render() {
        const data = this.state.data;
        return (
            <div styleName="order-list-container">
                <h2>您的订单</h2>
                {
                    data.length
                    ?
                    <div>
                        {
                            data.map((item, index) => {
                                return <Item key={index} data={item} submitComment={this.submitComment.bind(this)} />
                            })
                        }
                    </div>
                    :
                    <div>正在加载您的订单中...</div>
                }
            </div>
        )
    }

}

OrderList = CSSModules(OrderList, styles);

export default OrderList;
