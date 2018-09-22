import React from 'react';

import { getAdData } from '../../../fetch/home';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class HomeAd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getAdData()
        .then(response => response.json())
        .then(res => {
            this.setState({
                data: res
            })
        })
    }

    render() {
        const HomeAd = (
            <div styleName="home-ad">
                <h2>超值特惠</h2>
                <div className="clear-fix" styleName="ad-container">
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <div key={index} className="float-left" styleName="ad-item">
                                    <a href={item.link} target="_blank"><img src={item.img} alt={item.title}/></a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
        return (
            <div>
                {
                    this.state.data.length
                    ?
                    <div>{HomeAd}</div>
                    :
                    <div>加载中...</div>
                }
            </div>
        )

    }

}

HomeAd = CSSModules(HomeAd, styles);

export default HomeAd;
