import React, {PureComponent} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userinfoActions from '$redux/actions/userinfo';

import Header from 'components/Header';
import CurrentCity from 'components/CurrentCity';
import CityList from 'components/CityList';

import {CITYNAME} from '../../../static/js/localStorekey';
import LocalStore from '../../../static/js/localStore';

class City extends PureComponent {
  constructor(props) {
    super(props);
  }

  changeCity(newCity) {
    if (newCity == null) {
      return;
    }

    const userinfo = this.props.userinfo;
    userinfo.cityName = newCity;
    this.props.userinfoAction.update(userinfo);
    
    LocalStore.setItem(CITYNAME, newCity);

    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Header title='选择城市'/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList changeFn={this
          .changeCity
          .bind(this)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userinfo: state.userinfo}
}

const mapDispatchToProps = (dispatch) => {
  return {
    userinfoAction: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)