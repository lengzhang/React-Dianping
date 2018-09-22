import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class LoadMore extends React.Component {

    static propTypes = {
        isLoadingMore: PropTypes.bool.isRequired,
        loadMoreFn: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;

        // 自动加载 callback
        function callback() {
            const { top } = wrapper.getBoundingClientRect();
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }

        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            // timeout 截流
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }, false);
    }

    render() {

        return (
            <div styleName="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.props.loadMoreFn}>加载更多</span>
                }
            </div>
        )

    }

}

LoadMore = CSSModules(LoadMore, styles);

export default LoadMore;
