import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import Face from './subpage/face';
import Action from './subpage/action';

import './subpage/style.scss';

class User extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
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