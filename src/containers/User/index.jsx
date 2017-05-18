import React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import Face from './subpage/face';
import Action from './subpage/action';

import './subpage/style.scss';

class User extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this
      .props
      .appActionList
      .menu({location: 4});
  }

  render() {
    return (
      <div className='userInfo'>
        <Face/>
        <Action/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    appActionList: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)