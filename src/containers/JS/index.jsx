import React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import Header from 'components/Header';

class JS extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this
      .props
      .appActionList
      .menu({location: 0});
  }

  render() {
    return (<Header title='待开发...'/>)
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

export default connect(mapStateToProps, mapDispatchToProps)(JS)