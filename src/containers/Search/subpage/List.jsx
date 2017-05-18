import React, {PureComponent} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import List from 'components/List';
import LoadMore from 'components/LoadMore';

import {getSearchData} from '../../../../fetch/search/search';
import ListData from '../../../../mock/search/list';

const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
};

class SearchList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    this
      .props
      .appActionList
      .menu({location: 0});
  }
  componentDidMount() {
    this.loadFirstPageData();
  }

  loadFirstPageData() {
    const cityName = this.props.userinfo.cityName;
    const page = this.state.page;
    const keyword = this.props.keyword;
    const category = this.props.category;
    const result = getSearchData(page, cityName, category, keyword);
    this.resultHandle(result);
  }

  loadMoreData() {
    this.setState({isLoadingMore: true});

    const cityName = this.props.userinfo.cityName;
    const page = this.state.page;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(page, cityName, category, keyword);
    this.resultHandle(result);
  }

  resultHandle(result) {
    const page = this.state.page;
    this.setState({
      page: page + 1
    });

    result.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return ListData;
      }
    }).then(json => {
      const hasMore = json.hasMore;
      const data = json.data;

      this.setState({
        hasMore: hasMore,
        isLoadingMore: false,
        data: this
          .state
          .data
          .concat(data)
      })
    }).catch(err => {
      console.log(err.message);
    })
  }

  //处理重新搜索
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword;
    const category = this.props.category;

    //搜索条件完全相等时，忽略。重要！！！
    if (keyword === prevProps.keyword && category === prevProps.category) {
      return;
    }

    this.setState(initialState);
    this.loadFirstPageData();
  }

  render() {
    return (
      <div>
        {this.state.data.length
          ? <List data={this.state.data}/>
          : <div>{/*加载中...*/}</div>}
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

const mapStateToProps = (state, ownProps) => {
  return {userinfo: state.userinfo}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)