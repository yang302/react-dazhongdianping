import React, {PureComponent} from 'react';

import './style.scss';

class Star extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let star = this.props.star || 0;
    if(star > 5){
        star = star % 5;
    }

    return (
      <div className='starContainer'>
        {[1,2,3,4,5].map((item, index) => {
            const lightClass = star >= item ? 'light' : '';
            return <i key={index} className={`icon-star ${lightClass}`}></i>
        })}
      </div>
    )
  }
}

export default Star