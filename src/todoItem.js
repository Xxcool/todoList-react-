import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
		// 子组件通过this.props.content获取值
		const {content} = this.props
    return (
			<li>
				<span>{content}</span>
				<button className="delete" onClick={this.handleClick}>删除</button>
			</li>
		);
	}
	
	handleClick() {
		// 调用父组件函数
		const {deleteItem, index} = this.props
		deleteItem(index)
	}
}

export default TodoItem;
