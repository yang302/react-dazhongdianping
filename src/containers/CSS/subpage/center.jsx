import React, {PureComponent} from 'react';

import Prism from 'prismjs';
import StyleData from './centerData';
import './center.scss';

class Center extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const center = [
        this.refs.center1,
        this.refs.center2,
        this.refs.center3,
        this.refs.center4
    ];
    const content = [
        this.refs.content1,
        this.refs.content2,
        this.refs.content3,
        this.refs.content4
    ];

    center.map((item, index) => {
        item.addEventListener('click', function(e){
            let content = item.getElementsByClassName('content')[0];
            content.style.right = '-1px';
            content.style.width = '101%';

            e.stopPropagation();
            e.preventDefault();
        });
    });

    content.map((item, index) => {
        item.getElementsByTagName('pre')[0].innerHTML = Prism.highlight(StyleData[index], Prism.languages.css);

        item.addEventListener('click', function(e) {
            item.style.right = '-100%';
            item.style.width = '0%';

            e.stopPropagation();
            e.preventDefault();
        });
    });
  }

  render() {
    return (
      <div className='center'>
        <div className='center1 centerList' ref='center1'>
            <div className='item'>1</div>
            <div className='content' ref='content1'><pre></pre></div>
        </div>
        <div className='center2 centerList' ref='center2'>
            <div className='item'>2</div>
            <div className='content' ref='content2'><pre></pre></div>
        </div>
        <div className='center3 centerList' ref='center3'>
            <div className='item'>3</div>
            <div className='content' ref='content3'><pre></pre></div>
        </div>
        <div className='center4 centerList' ref='center4'>
            <div className='item'>4</div>
            <div className='content' ref='content4'><pre></pre></div>
        </div>
      </div>
    )
  }
}

export default Center