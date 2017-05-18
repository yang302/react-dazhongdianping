import React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

class NotFound extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this
      .props
      .appActionList
      .menu({location: -1});
  }

  render() {
    return (
      <h2 style={{
        textAlign: 'center'
      }}>404页面丢失了...</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)