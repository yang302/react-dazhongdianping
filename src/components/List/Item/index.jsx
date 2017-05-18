import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class Item extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }
  render() {
    const data = this.props.data;
    return (
      <div className='listItem clearfix'>
        <Link to={`/detail/${data.id}`}>
          <div className='itemImgConatiner fl'>
            <img src={data.img} alt={data.title}/>
          </div>
          <div className='itemContent'>
            <div className='itemTitleContainer clearfix'>
              <h3 className='fl'>{data.title}</h3>
              <span className='fr'>{data.distance}</span>
            </div>
            <p className='itemSubTitle'>{data.subTitle}</p>
            <div className='itemPriceContainer clearfix'>
              <span className='price fl'>￥{data.price}</span>
              <span className='number fr'>已售{data.number}</span>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Item