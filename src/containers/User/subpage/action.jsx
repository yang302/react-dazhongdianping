import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class Action extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }

  render() {
    return (
      <div className='userActionList'>
        <ul>
            <li className=''>
              <Link to='/css'>CSS3效果列表</Link>
            </li>
            <li>
              <Link to='/js'>JavaScript基础</Link>
            </li>
        </ul>    
      </div>
    )
  }
}

export default Action