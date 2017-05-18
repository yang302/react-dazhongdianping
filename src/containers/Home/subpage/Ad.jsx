import React, {PureComponent} from 'react';

import HomeAd from 'components//HomeAd';
import AdData from '../../../../mock/home/ad';
import {getAdData} from '../../../../fetch/home/home';

class Ad extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const result = getAdData();
    result.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return AdData;
      }
    }).then(json => {
      const data = json;
      if (data.length) {
        this.setState({data: data});
      }
    }).catch(err => {
      console.log(err.message);
    })
  }

  render() {
    return (
      <div>
        {this.state.data.length
          ? <HomeAd data={this.state.data}/>
          : <div>加载中...</div>}
      </div>
    )
  }
}

export default Ad