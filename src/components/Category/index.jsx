import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import ReactSwipe from 'react-swipe';

import './style.scss';

class Category extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  SwipeCategory(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const opt = {
      auto: 2500,
      callback: (index) => {
        this.setState({index: index});
      }
    };

    return (
      <div className='homeCategory'>
        <ReactSwipe swipeOptions={opt}>
          <div className='carouselItem'>
            <ul className='clearfix'>
              <Link to='/search/jingdian'>
                <li className='fl jingdian'>景点</li>
              </Link>
              <Link to='/search/ktv'>
                <li className='fl ktv'>KTV</li>
              </Link>
              <Link to='/search/gouwu'>
                <li className='fl gouwu'>购物</li>
              </Link>
              <Link to='/search/shenghuofuwu'>
                <li className='fl shenghuofuwu'>生活服务</li>
              </Link>
              <Link to='/search/jianshenyundong'>
                <li className='fl jianshenyundong'>健身运动</li>
              </Link>
              <Link to="/search/meifa">
                <li className="fl meifa">美发</li>
              </Link>
              <Link to="/search/qinzi">
                <li className="fl qinzi">亲子</li>
              </Link>
              <Link to="/search/xiaochikuaican">
                <li className="fl xiaochikuaican">小吃快餐</li>
              </Link>
              <Link to="/search/zizhucan">
                <li className="fl zizhucan">自助餐</li>
              </Link>
              <Link to="/search/jiuba">
                <li className="fl jiuba">酒吧</li>
              </Link>
            </ul>
          </div>
          <div className='carouselItem'>
            <ul className='clear-fix'>
              <Link to="/search/meishi">
                <li className="fl meishi">美食</li>
              </Link>
              <Link to="/search/dianying">
                <li className="fl dianying">电影</li>
              </Link>
              <Link to="/search/jiudian">
                <li className="fl jiudian">酒店</li>
              </Link>
              <Link to="/search/xuixianyule">
                <li className="fl xuixianyule">休闲娱乐</li>
              </Link>
              <Link to="/search/waimai">
                <li className="fl waimai">外卖</li>
              </Link>
              <Link to="/search/huoguo">
                <li className="fl huoguo">火锅</li>
              </Link>
              <Link to="/search/liren">
                <li className="fl liren">丽人</li>
              </Link>
              <Link to="/search/dujiachuxing">
                <li className="fl dujiachuxing">度假出行</li>
              </Link>
              <Link to="/search/zuliaoanmo">
                <li className="fl zuliaoanmo">足疗按摩</li>
              </Link>
              <Link to="/search/zhoubianyou">
                <li className="fl zhoubianyou">周边游</li>
              </Link>
            </ul>
          </div>
          <div className='carouselItem'>
            <ul className='clear-fix'>
              <Link to="/search/ribencai">
                <li className="fl ribencai">日本菜</li>
              </Link>
              <Link to="/search/SPA">
                <li className="fl SPA">SPA</li>
              </Link>
              <Link to="/search/jiehun">
                <li className="fl jiehun">结婚</li>
              </Link>
              <Link to="/search/xuexipeixun">
                <li className="fl xuexipeixun">学习培训</li>
              </Link>
              <Link to="/search/xican">
                <li className="fl xican">西餐</li>
              </Link>
              <Link to="/search/huochejipiao">
                <li className="fl huochejipiao">火车机票</li>
              </Link>
              <Link to="/search/shaokao">
                <li className="fl shaokao">烧烤</li>
              </Link>
              <Link to="/search/jiazhuang">
                <li className="fl jiazhuang">家装</li>
              </Link>
              <Link to="/search/chongwu">
                <li className="fl chongwu">宠物</li>
              </Link>
              <Link to="/search/quanbufenlei">
                <li className="fl quanbufenlei">全部分类</li>
              </Link>
            </ul>
          </div>
        </ReactSwipe>
        <div className='indexContainer'>
          <ul>
            <li
              className={this.state.index === 0
              ? 'selected'
              : ''}
              data-index='0'
              onClick={this
              .SwipeCategory
              .bind(this)}></li>
            <li
              className={this.state.index === 1
              ? 'selected'
              : ''}
              data-index='1'
              onClick={this
              .SwipeCategory
              .bind(this)}></li>
            <li
              className={this.state.index === 2
              ? 'selected'
              : ''}
              data-index='2'
              onClick={this
              .SwipeCategory
              .bind(this)}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Category