import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import HomeHeader from 'components/HomeHeader';
import Category from 'components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends Component {
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
      .menu({location: 1});
  }

  render() {
    return (
      <div>
        <HomeHeader
          cityName={this.props.userinfo.cityName}
          history={this.props.history}/>
        <Category/>
        <div style={{
          height: '15px'
        }}></div>
        <Ad/>
        <List cityName={this.props.userinfo.cityName}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {userinfo: state.userinfo}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    appActionList: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)