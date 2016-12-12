import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

render((
	// 路由嵌套
  <Router history={hashHistory}>
    <Route path="/" component={App}>
  		{/*子路由*/}
		<Route path="/repos" component={Repos}/>
    	<Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
//用户访问/repos时，会先加载App组件，然后在它的内部再加载Repos组件。

//另外一种写法
// let routes = <Route path="/" component={App}>
// 				  <Route path="/repos" component={Repos}/>
// 				  <Route path="/about" component={About}/>
// 			</Route>;
// <Router routes={routes} history={browserHistory}/>