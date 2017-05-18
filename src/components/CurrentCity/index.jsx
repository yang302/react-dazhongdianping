import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import'./style.scss';

export default class CurrentCity extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }

  render() {
    return (
      <div className='currentCity'>
        {this.props.cityName}
      </div>
    )
  }
}