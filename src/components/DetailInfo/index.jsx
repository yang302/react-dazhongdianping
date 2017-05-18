import React, {PureComponent} from 'react';

import Star from 'components/Star';
import './style.scss';

class DetailInfo extends PureComponent {
  constructor(props) {
    super(props);
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