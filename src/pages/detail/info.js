import React from 'react';
import PropTypes from 'prop-types';

import { getInfoData } from '../../fetch/detail';

import DetailInfo from '../../components/detail/detail-info';

export class Info extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            hasInfo: false,
            info: {}
        }
    }

    componentDidMount() {
        getInfoData(this.props.id)
        .then(response => response.json())
        .then(res => {
            this.setState({
                hasInfo: true,
                info: res
            })
        })
        .catch(ex => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错')
            }
        })
    }

    render() {

        return (
            <div>
                {
                    this.state.hasInfo
                    ?
                    <DetailInfo info={this.state.info} />
                    :
                    <div>加载中...</div>
                }
            </div>
        )

    }

}

export default Info;
