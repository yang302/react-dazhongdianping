import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import SearchInput from '../SearchInput';

import './style.scss';

class HomeHeader extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }
  }

  enterHandle(value) {
    this
      .props
      .history
      .push('/search/all/' + encodeURIComponent(value));
  }

  render() {
    return (
      <div className='homeHeader clearfix'>
        <div className='homeHeaderLeft fl'>
          <Link to='/city'>
            <span>{this.props.cityName}</span>&nbsp;
            <i className='icon-angle-down'></i>
          </Link>
        </div>
        <div className='homeHeaderRight fr'>
          <Link to='/user'>
            <i className='icon-user'></i>
          </Link>
        </div>
        <SearchInput
          value=''
          enterHandle={this
          .enterHandle
          .bind(this)}/>
      </div>
    )
  }
}

export default HomeHeader