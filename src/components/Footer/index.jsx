import React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './style.scss';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = this.props.app.location;
    return (
      <div>
        {menu === 0
          ? ''
          : <div className='commonFooter'>
            <ul className='footerList'>
              <li>
                {menu === 1
                  ? <span className='active'>首页</span>
                  : <Link to='/'><span>首页</span></Link>}
              </li>
              <li>
                {menu === 2
                  ? <span className='active'>新闻</span>
                  : <span>新闻</span>}
              </li>
              <li>
                {menu === 3
                  ? <span className='active'>发现</span>
                  : <Link to='/search/all'><span>发现</span></Link>}
              </li>
              <li>
                {menu === 4
                  ? <span className='active'>我的</span>
                  : <Link to='/user'><span>我的</span></Link>}
              </li>
            </ul>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {app: state.app}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)