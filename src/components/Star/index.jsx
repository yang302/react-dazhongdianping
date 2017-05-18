import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class Star extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
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