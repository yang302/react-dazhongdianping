import React, {PureComponent} from 'react';

import CommentList from 'components/CommentList';
import LoadMore from 'components/LoadMore';

import {getCommentData} from '../../../../fetch/detail/detail';
import commentData from '../../../../mock/detail/comment';

import './style.scss';

class Comment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    };
  }

  componentDidMount() {
    this.loadFirstPageData();
  }

  loadFirstPageData() {
    const id = this.props.id;
    const result = getCommentData(0, id);
    this.resultHandle(result);
  }

  loadMoreData() {
    this.setState({isLoadingMore: true});

    const id = this.props.id;
    const page = this.state.page;
    const result = getCommentData(page, id);
    this.resultHandle(result);
  }

  resultHandle(result) {
    result.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return commentData;
      }
    }).then(json => {
      const page = this.state.page;
      const hasMore = json.hasMore;
      const data = json.data;

      this.setState({
        page: page + 1,
        hasMore: hasMore,
        isLoadingMore: false,
        data: this
          .state
          .data
          .concat(data)
      });
    }).catch(err => {
      console.log('详情页获取用户评论数据出错', err.message);
    })
  }

  render() {
    return (
      <div className='detailCommentContainer'>
        <h2>用户点评</h2>
        {this.state.data.length
          ? <CommentList data={this.state.data}/>
          : <div className='loading'>加载中...</div>}
        {this.state.hasMore
          ? <LoadMore
              isLoadingMore={this.state.isLoadingMore}
              loadMoreFn={this
              .loadMoreData
              .bind(this)}/>
          : ''}
      </div>
    )
  }
}

export default Comment