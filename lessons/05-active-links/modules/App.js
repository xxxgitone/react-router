import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
      {/*activeStyle使点击后的连接呈现红色，两种方式，后面使用className要自己写css代码*/}
          {/*<li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>*/}
            
            {/*把状态信息封装给NavLink统一管理*/}
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
