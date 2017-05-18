import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Item from './Item';

import './style.scss';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const data = this.props.data;

        return (
            <div className="commentList">
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default CommentList