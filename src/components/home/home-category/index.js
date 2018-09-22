import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCityName} from '../../../reducers/user';

import SearchInput from '../../search/search-input';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

import ReactSwipe from 'react-swipe';

export class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        const opt = {
            startSlide: 0,
            speed: 400,
            auto: 2000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: (index, elem) => {
                // 更新当前轮播图的index
                this.setState({index: index});
            },
            transitionEnd: (index, elem) => {}
        }

        return (<div styleName="category">
            <ReactSwipe swipeOptions={opt}>
                <div styleName="carousel-item">
                    <ul className="clear-fix">
                        <Link to="/search/jingdian">
                            <li className="float-left" styleName="jingdian">景点</li>
                        </Link>
                        <Link to="/search/ktv">
                            <li className="float-left" styleName="ktv">KTV</li>
                        </Link>
                        <Link to="/search/gouwu">
                            <li className="float-left" styleName="gouwu">购物</li>
                        </Link>
                        <Link to="/search/shenghuofuwu">
                            <li className="float-left" styleName="shenghuofuwu">生活服务</li>
                        </Link>
                        <Link to="/search/jianshenyundong">
                            <li className="float-left" styleName="jianshenyundong">健身运动</li>
                        </Link>
                        <Link to="/search/meifa">
                            <li className="float-left" styleName="meifa">美发</li>
                        </Link>
                        <Link to="/search/qinzi">
                            <li className="float-left" styleName="qinzi">亲子</li>
                        </Link>
                        <Link to="/search/xiaochikuaican">
                            <li className="float-left" styleName="xiaochikuaican">小吃快餐</li>
                        </Link>
                        <Link to="/search/zizhucan">
                            <li className="float-left" styleName="zizhucan">自助餐</li>
                        </Link>
                        <Link to="/search/jiuba">
                            <li className="float-left" styleName="jiuba">酒吧</li>
                        </Link>
                    </ul>
                </div>
                <div styleName="carousel-item">
                    <ul className="clear-fix">
                        <Link to="/search/meishi">
                            <li className="float-left" styleName="meishi">美食</li>
                        </Link>
                        <Link to="/search/dianying">
                            <li className="float-left" styleName="dianying">电影</li>
                        </Link>
                        <Link to="/search/jiudian">
                            <li className="float-left" styleName="jiudian">酒店</li>
                        </Link>
                        <Link to="/search/xuixianyule">
                            <li className="float-left" styleName="xuixianyule">休闲娱乐</li>
                        </Link>
                        <Link to="/search/waimai">
                            <li className="float-left" styleName="waimai">外卖</li>
                        </Link>
                        <Link to="/search/huoguo">
                            <li className="float-left" styleName="huoguo">火锅</li>
                        </Link>
                        <Link to="/search/liren">
                            <li className="float-left" styleName="liren">丽人</li>
                        </Link>
                        <Link to="/search/dujiachuxing">
                            <li className="float-left" styleName="dujiachuxing">度假出行</li>
                        </Link>
                        <Link to="/search/zuliaoanmo">
                            <li className="float-left" styleName="zuliaoanmo">足疗按摩</li>
                        </Link>
                        <Link to="/search/zhoubianyou">
                            <li className="float-left" styleName="zhoubianyou">周边游</li>
                        </Link>
                    </ul>
                </div>
                <div styleName="carousel-item">
                    <ul className="clear-fix">
                        <Link to="/search/ribencai">
                            <li className="float-left" styleName="ribencai">日本菜</li>
                        </Link>
                        <Link to="/search/spa">
                            <li className="float-left" styleName="SPA">SPA</li>
                        </Link>
                        <Link to="/search/jiehun">
                            <li className="float-left" styleName="jiehun">结婚</li>
                        </Link>
                        <Link to="/search/xuexipeixun">
                            <li className="float-left" styleName="xuexipeixun">学习培训</li>
                        </Link>
                        <Link to="/search/xican">
                            <li className="float-left" styleName="xican">西餐</li>
                        </Link>
                        <Link to="/search/huochejipiao">
                            <li className="float-left" styleName="huochejipiao">火车机票</li>
                        </Link>
                        <Link to="/search/shaokao">
                            <li className="float-left" styleName="shaokao">烧烤</li>
                        </Link>
                        <Link to="/search/jiazhuang">
                            <li className="float-left" styleName="jiazhuang">家装</li>
                        </Link>
                        <Link to="/search/chongwu">
                            <li className="float-left" styleName="chongwu">宠物</li>
                        </Link>
                        <Link to="/search/all">
                            <li className="float-left" styleName="quanbufenlei">全部分类</li>
                        </Link>
                    </ul>
                </div>
            </ReactSwipe>
            <div styleName="index-container">
                <ul>
                    <li styleName={this.state.index === 0
                            ? "selected"
                            : ''}></li>
                    <li styleName={this.state.index === 1
                            ? "selected"
                            : ''}></li>
                    <li styleName={this.state.index === 2
                            ? "selected"
                            : ''}></li>
                </ul>
            </div>
        </div>)
    }
}

Category = CSSModules(Category, styles);

export default Category;
