import React from 'react';
import PropTypes from 'prop-types';

import CommentListItem from './item';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class CommentList extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="comment-list">
                {
                    this.props.data.map((item, index) => {
                        return (
                            <CommentListItem key={index} data={item} />
                        )
                    })
                }
            </div>
        )

    }

}

CommentList = CSSModules(CommentList, styles);

export default CommentList;
