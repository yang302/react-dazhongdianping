import React, {PureComponent} from 'react';

import './style.scss';

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
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