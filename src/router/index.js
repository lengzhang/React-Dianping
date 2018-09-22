import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

// 生成异步加载组件
import { asyncRouteComponent } from '../components/generateAsyncComponent.js';

import Head from '../components/head';
import HomeHead from '../components/home/home-head';
import SearchHead from '../components/search/search-head';

/**
 * 创建路由
 * @param  {Object} userinfo 用户信息，以此判断用户是否是登录状态，并控制页面访问权限
 * @return {[type]}
 */
export default (user) => {

  // 登录用户才能访问
  const requireAuth = (Layout, props) => {
    if (!user) {
      return <Redirect to="/login" />
    } else {
      return <Layout {...props} />
    }
  }

  // 游客才能访问
  const requireTourists = (Layout, props) => {
    if (user) {
      return <Redirect to="/" />
    } else {
      return <Layout {...props} />
    }
  }

  // 大家都可以访问
  const triggerEnter = (Layout, props) => {
    return <Layout {...props} />
  }

  // 路由数组
  const routeArr = [

    {
      path: '/',
      exact: true,
      head: HomeHead,
      component: asyncRouteComponent({
        loader: () => import('../pages/home')
      }),
      enter: triggerEnter
    },
    {
      path: '/city',
      exact: true,
      head: Head,
      component: asyncRouteComponent({
        loader: () => import('../pages/city')
      }),
      enter: triggerEnter
    },
    {
      path: '/search/:category/:keyword?',
      exact: true,
      head: SearchHead,
      component: asyncRouteComponent({
        loader: () => import('../pages/search')
      }),
      enter: triggerEnter
    },
    {
      path: '/login',
      exact: true,
      head: Head,
      component: asyncRouteComponent({
        loader: () => import('../pages/login')
      }),
      enter: triggerEnter
    },
    {
      path: '/user',
      exact: true,
      head: Head,
      component: asyncRouteComponent({
        loader: () => import('../pages/user')
      }),
      enter: triggerEnter
    },
    {
      path: '/detail/:id',
      exact: true,
      head: Head,
      component: asyncRouteComponent({
        loader: () => import('../pages/detail')
      }),
      enter: triggerEnter
    },
    {
      path: '**',
      head: Head,
      component: asyncRouteComponent({
        loader: () => import('../pages/not-found')
      }),
      enter: triggerEnter
    }
  ]

  let router = () => (<div>

      <Switch>
        {routeArr.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.head}
            />)
        )}
      </Switch>

      <Switch>
        {routeArr.map((route, index) => {
          if (route.component) {
            return (<Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={props => route.enter(route.component, props)}
              />)
          }
        })}
      </Switch>

      </div>)

  return {
    list: routeArr,
    dom: router
  }
}
