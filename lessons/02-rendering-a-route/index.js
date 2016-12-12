import React from 'react'
import { render } from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
//render(<App/>, document.getElementById('app'))
render((

	// 添加多个路由，不添加路径默认访问App，path‘/’表示根路由http://localhost:8080/#
	// 可以这样访问
	// http://localhost:8080/#/repos
	// http://localhost:8080/#/about
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/repos" component={Repos}/>
		<Route path="/about" component={About}/>
	</Router>),document.getElementById('app'));

