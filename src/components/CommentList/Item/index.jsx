import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../../Star';

import './style.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const item = this.props.data;

        return (
            <div className="commentItem">
               <h3>
                <i className='icon-user'></i>&nbsp;{item.username}
               </h3>
               <Star star={item.star}/>
               <p>{item.comment}</p>
            </div>
        )
    }
}

export default Item