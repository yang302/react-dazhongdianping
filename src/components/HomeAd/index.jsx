import React, {PureComponent} from 'react';

import './style.scss';

class HomeAd extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homeAd'>
        <h2>超值优惠</h2>
        <div className='adContainer clearfix'>
          {this
            .props
            .data
            .map((item, index) => {
              return <div key={index} className='adItem fl'>
                <a href='#'>
                  <img src={item.img} alt={item.title} />
                </a>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default HomeAd