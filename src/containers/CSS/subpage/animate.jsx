import React, {PureComponent} from 'react';

import Prism from 'prismjs';
import StyleData from './animateData';
import './animate.scss';

class Aniamte extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const animate = [this.refs.animate1, this.refs.animate2, this.refs.animate3];
    const content = [this.refs.content1, this.refs.content2, this.refs.content3];

    animate.map((item) => {
      item
        .addEventListener('click', function (e) {
          let content = item.getElementsByClassName('content')[0];
          content.style.right = '-1px';
          content.style.width = '101%';

          e.stopPropagation();
          e.preventDefault();
        });
    });

    content.map((item, index) => {
      item.getElementsByTagName('pre')[0].innerHTML = Prism.highlight(StyleData[index], Prism.languages.css);

      item.addEventListener('click', function (e) {
        item.style.right = '-100%';
        item.style.width = '0%';

        e.stopPropagation();
        e.preventDefault();
      });
    });
  }

  render() {
    return (
      <div className='animate'>
        <div className='animate1 animateList' ref='animate1'>
          <div className='item'>位移</div>
          <div className='content' ref='content1'>
            <pre></pre>
          </div>
        </div>
        <div className='animate2 animateList' ref='animate2'>
          <div className='animateTitle'>
            <div className='item item1'>旋转1</div>
            <div className='item item2'>旋转2</div>
            <div className='itemLine'></div>
          </div>
          <div className='content' ref='content2'>
            <pre></pre>
          </div>
        </div>
        <div className='animate3 animateList' ref='animate3'>
          <div className='item'>翻转</div>
          <div className='content' ref='content3'>
            <pre></pre>
          </div>
        </div>
      </div>
    )
  }
}

export default Aniamte