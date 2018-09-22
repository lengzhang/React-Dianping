import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class ListItem extends React.Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix" styleName="list-item">
                <Link to={`/detail/${data.id}`}>
                    <div className="float-left" styleName="item-img-container">
                        <img src={data.img} alt={data.title} />
                    </div>
                    <div styleName="item-content">
                        <div className="clear-fix" styleName="item-title-container">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p styleName="item-sub-title">{data.subTitle}</p>
                        <div className="clear-fix" styleName="item-price-container">
                            <span className="float-left" styleName="price">￥{data.price}</span>
                            <span className="float-right" styleName="mumber">已售{data.mumber}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )

    }

}

ListItem = CSSModules(ListItem, styles);

export default ListItem;
