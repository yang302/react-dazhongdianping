import React, {PureComponent} from 'react';

import './style.scss';

class SearchInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    });
  }

  changeHandle(e) {
    this.setState({value: e.target.value});
  }

  keyUpHandle(e) {
    if (e.keyCode !== 13) 
      return;
    this
      .props
      .enterHandle(this.state.value);
  }

  render() {
    return (
      <div className='searchContainer'>
        <i className='icon-search'></i>
        <input
          type='text'
          placeholder='请输入关键字'
          value={this.state.value}
          onChange={this
          .changeHandle
          .bind(this)}
          onKeyUp={this
          .keyUpHandle
          .bind(this)}/>
      </div>
    )
  }
}

export default SearchInput