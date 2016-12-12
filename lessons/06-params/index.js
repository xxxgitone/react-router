import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      	<Route path="/repos" component={Repos}/>
      {/*/:userName表示参数名   path属性指定路由的匹配规则。
      这个属性是可以省略的，这样的话，不管路径是否匹配，总是会加载指定组件。*/}
	 	<Route path="/repos/:userName/:repoName" component={Repo} /> 
      	<Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
