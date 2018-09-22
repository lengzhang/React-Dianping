import React from 'react';

// http://blog.csdn.net/ISaiSai/article/details/78094556
import { withRouter } from 'react-router-dom';

// 壳组件
import Shell from '../../components/shell';
import Meta from '../../components/meta';

import HomeCategory from '../../components/home/home-category';
import HomeAd from '../../components/home/home-ad';
import HomeList from '../../components/home/home-list';

export class Home extends React.Component {

  // 服务端渲染
  // 加载需要在服务端渲染的数据
  static loadData({ store, match }) {
    return new Promise(async function (resolve, reject) {

      /* 敲黑板～ 这里是重点～～～～～～～～～～～（为了引起你的注意，我写了这句话）*/

      /**
       * 这里的 loadPostsList 方法，是在服务端加载 posts 数据，储存到 redux 中。
       * 这里对应的组件是 PostsList，PostsList组件里面也有 loadPostsList 方法，但它是在客户端执行。
       * 然后，服务端在渲染 PostsList 组件的时候，我们会先判断如果redux中，是否存在该条数据，如果存在，直接拿该数据渲染
       */


      resolve({ code:200 });
    })
  }

  constructor(props) {
    super(props);
  }

  render() {
    return(<div>

      <Meta title="首页" />
      <HomeCategory />
      <div style={{height: '15px'}}>{/* 分割线 */}</div>
      <HomeAd/>
      <HomeList/>
    </div>)
  }

}

Home = withRouter(Home);

export default Shell(Home);
