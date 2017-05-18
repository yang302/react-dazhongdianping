import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from 'components/Star';
import './style.scss';

class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }

  render() {
    const data = this.props.data;
    return (
      <div className='detailInfoContainer'>
        <div className='infoContainer clearfix'>
          <div className='infoImgContainer fl'>
            <img src={data.img}/>
          </div>
          <div className='infoContent'>
            <h1>{data.title}</h1>
            <div className='starContent'>
              <Star star={data.star}/>
              <span className='price'>￥{data.price}</span>
            </div>
            <p className='subTitle'>{data.subTitle}</p>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{
          __html: data.desc
        }}
          className='infoDesc'></p>
      </div>
    )
  }
}

export default DetailInfo