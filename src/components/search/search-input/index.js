import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class SearchInput extends React.Component {

    static propTypes = {}

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
    }

    ChangeHandle(event) {
        // 监控变化
        this.setState({value: event.target.value})
    }

    KeyUpHandle(event) {
        // 监控 enter 事件
        if (event.keyCode !== 13) {
            return
        }
        this.props.enterHandle(event.target.value)
    }

    SearchClickHandle() {
        this.props.enterHandle(this.refs.searchInput.value)
    }

    render() {

        return (<div styleName="search-container">
            <input ref='searchInput' styleName="search-input" type='text' placeholder="请输入关键字" onChange={this.ChangeHandle.bind(this)} onKeyUp={this.KeyUpHandle.bind(this)} value={this.state.value}></input>
            <i className="fas fa-search" onClick={this.SearchClickHandle.bind(this)}></i>
        </div>)
    }
}

SearchInput = CSSModules(SearchInput, styles);

export default SearchInput;
