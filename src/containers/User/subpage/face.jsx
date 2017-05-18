import React, {PureComponent} from 'react';

class Face extends PureComponent {
  constructor(props) {
    super(props);
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