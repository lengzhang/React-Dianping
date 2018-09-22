import React from 'react';
import PropTypes from 'prop-types';

import Star from '../../star';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class CommentListItem extends React.Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return (
            <div styleName="comment-item">
                <h3>
                    <i className="fas fa-user"></i>
                    &nbsp;
                    {data.username}
                </h3>
                <Star star={data.star}/>
                <p>{data.comment}</p>
            </div>
        )

    }

}

CommentListItem = CSSModules(CommentListItem, styles);

export default CommentListItem;
