import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import SearchHeader from 'components/SearchHeader';
import SearchList from './subpage/List';

class Search extends Component {
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
      .menu({location: 3});
  }

  render() {
    const params = this.props.match.params;

    return (
      <div>
        <SearchHeader keyword={params.keyword} history={this.props.history}/>
        <SearchList keyword={params.keyword} category={params.category}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {userinfo: state.userinfo}
}

const mapDispatchToProps = (dispatch) => {
  return {
    appActionList: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)