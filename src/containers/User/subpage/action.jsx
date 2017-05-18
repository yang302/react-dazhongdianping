import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

class Action extends PureComponent {
  constructor(props) {
    super(props);
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