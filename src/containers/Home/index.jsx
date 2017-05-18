import React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import HomeHeader from 'components/HomeHeader';
import Category from 'components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends PureComponent {
  constructor(props) {
    super(props);
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