import React, {PureComponent} from 'react';

import SearchInput from 'components/SearchInput';
import './style.scss';

class SearchHeader extends PureComponent {

  constructor(props) {
    super(props);
  }

  clickHandle() {
    window
      .history
      .back();
  }

  enterHandle(value) {
    this
      .props
      .history
      .push('/search/all/' + encodeURIComponent(value));
  }

  render() {
    return (
      <div className='searchHeader clearfix'>
        <span
          className='back-icon fl'
          onClick={this
          .clickHandle
          .bind(this)}>
          <i className='icon-chevron-left'></i>
        </span>
        <SearchInput
          value={this.props.keyword}
          enterHandle={this
          .enterHandle
          .bind(this)}/>
      </div>
    )
  }
}

export default SearchHeader