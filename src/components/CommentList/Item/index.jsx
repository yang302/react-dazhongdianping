import React from 'react';

import Star from '../../Star';

import './style.scss';

class Item extends React.PureComponent {
    constructor(props) {
        super(props);
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