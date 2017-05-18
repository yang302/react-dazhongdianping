import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DetailInfo from 'components/DetailInfo';

import {getDetail} from '../../../../fetch/detail/detail';
import InfoData from '../../../../mock/detail/info';

class Info extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);

    this.state = {
      info: ''
    }
  }

  componentDidMount() {
    const id = this.props.id;
    const result = getDetail(id);

    result.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return InfoData;
      }
    }).then(json => {
      this.setState({info: json});
    }).catch(err => {
      console.log(err.message);
    })
  }

  render() {
    return (
      <div>
        {this.state.info
          ? <DetailInfo data={this.state.info}/>
          : <div>正在加载...</div>}
      </div>
    )
  }
}

export default Info