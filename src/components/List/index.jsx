import React, {PureComponent} from 'react';

import Item from './Item';
import './style.scss';

class HomeList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='listContainer'>
        {this.props.data.map((item, index) => {
          return <Item key={index} data={item}/>
        })}
      </div>
    )
  }
}


export default HomeList