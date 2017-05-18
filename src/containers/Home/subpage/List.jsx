import React, {PureComponent} from 'react';

import HomeList from 'components/List';
import LoadMore from 'components/LoadMore';
import ListData from '../../../../mock/home/List';
import {getListData} from '../../../../fetch/home/home';

import './style.scss';

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: false,
      data: [],
      isLoadingMore: false,
      page: 0
    };
  }

  componentDidMount() {
    const cityName = this.props.cityName;
    const result = getListData(cityName, 0);
    this.resultHandle(result);
  }

  resultHandle(result) {
    result.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return ListData;
      }
    }).then(json => {
      const data = json.data;
      const hasMore = json.hasMore;
      if (data.length) {
        this.setState({
          hasMore: hasMore,
          data: this.state.data.concat(data),
          isLoadingMore: false
        });
      }
    }).catch(err => {
      console.log(err.message);
    })
  }

  loadMoreData() {
    this.setState({isLoadingMore: true});

    const cityName = this.props.cityName;
    const page = this.state.page;
    const result = getListData(cityName, page);
    this.resultHandle(result);

    this.setState({
      page: page + 1
    });
  }

  render() {
    return (
      <div>
        <h2 className='homeListTitle'>猜你喜欢</h2>
        {this.state.data.length
          ? <HomeList data={this.state.data}/>
          : <div>加载中...</div>}
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

export default List