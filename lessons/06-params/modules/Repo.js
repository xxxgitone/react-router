import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      	{/*this.props.params.repoName,对应index.js文件中Repo组件path的路径的命名*/}
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})