import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Item from './Item';
import './style.scss';

class HomeList extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
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