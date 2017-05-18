import React, {PureComponent} from 'react';

import './style.scss';

class LoadMore extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const wrapper = this.refs.wrapper;
    const loadMoreFn = this.props.loadMoreFn;

    const callback = () => {
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;

      if(top && top < windowHeight) {
        loadMoreFn();
      }
    }

    //滚动事件
    let timeAction;
    window.addEventListener('scroll', () => {
      if(this.props.isLoadingMore) {
        return;
      }

      if(timeAction) {
        clearTimeout(timeAction);
      }

      timeAction = setTimeout(callback, 50);
    });
  }

  loadMoreHandle() {
    this.props.loadMoreFn();
  }

  render() {
    return (
      <div className='loadMore' ref='wrapper'>
        {this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>}
      </div>
    )
  }
}

export default LoadMore