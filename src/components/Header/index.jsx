import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandle() {
        window.history.back();
    }

    render() {
        return (
            <div className='commonHeader'>
                <span className='back-icon' onClick={this.clickHandle.bind(this)}>
                    <i className='icon-chevron-left'></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}