import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

import Star from '../../star';

export class DetailInfo extends React.Component {

    static propTypes = {
        info: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info
        return (<div styleName="detail-info-container">
            <div className="clear-fix" styleName="info-container">
                <div className="float-left" styleName="info-img-container">
                    <img src={info.img}/>
                </div>
                <div styleName="info-content">
                    <h1>{info.title}</h1>
                    <div className="star-container">
                        {/* 引用 Star 组件 */}
                        <Star star={info.star}/>
                        <span className="price">￥{info.price}</span>
                    </div>
                    <p styleName="sub-title">{info.subTitle}</p>
                </div>
            </div>
            {/* 设置 innerHTML */}
            <p dangerouslySetInnerHTML={{
                    __html: info.desc
                }} styleName="info-desc"></p>
        </div>)

    }

}

DetailInfo = CSSModules(DetailInfo, styles);

export default DetailInfo;
