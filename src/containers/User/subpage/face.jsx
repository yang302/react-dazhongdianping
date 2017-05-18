import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Face extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }

  render() {
    return (
      <div className='userInfoFace'>
        <div className='face'></div>
        <div className='userInfoAction'>
            <span>登录</span>
            <span>注册</span>
        </div>
      </div>
    )
  }
}

export default Face