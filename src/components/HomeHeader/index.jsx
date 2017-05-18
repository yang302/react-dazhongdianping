import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchInput from '../SearchInput';

import './style.scss';

class HomeHeader extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);

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