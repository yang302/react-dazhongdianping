import React, {PureComponent} from 'react';

import'./style.scss';

export default class CurrentCity extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='currentCity'>
        {this.props.cityName}
      </div>
    )
  }
}