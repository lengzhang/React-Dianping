import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class BuyAndStore extends React.Component {

    static propTypes = {
        isStore: PropTypes.bool.isRequired,
        buyHandle: PropTypes.func.isRequired,
        storeHandle: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (<div className="clear-fix" styleName="buy-store-container">
            <div className="float-left" styleName="item-container">
                {
                    // 是否已经收藏了
                    this.props.isStore
                        ? <button onClick={this.props.storeHandle.bind(this)}>已收藏</button>
                        : <button onClick={this.props.storeHandle.bind(this)}>收藏</button>
                }
            </div>
            <div className="float-right" styleName="item-container">
                <button onClick={this.props.buyHandle.bind(this)}>购买</button>
            </div>
        </div>)

    }

}

BuyAndStore = CSSModules(BuyAndStore, styles);

export default BuyAndStore;
