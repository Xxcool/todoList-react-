import React, { Component, Fragment } from "react";
import TodoItem from "./todoItem";
import { Button } from "antd";
import { Input } from "antd";
import "./index.css";

class TodoList extends Component {
  // 一旦写了constructor，就一定要写super，此时组件才有自己的this
  constructor(props) {
    super(props);

    // 定义数据
    this.state = {
      inputValue: "",
      list: ["study React", "study Vue"],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnterInput = this.handleEnterInput.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <label htmlFor="insertArea">输入内容：</label>
          {/* bind绑定this */}
          <Input
            style={{ width: 200 }}
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyDown={this.handleEnterInput}
          ></Input>
          {/* 箭头函数绑定this */}
          <Button type="primary" className="addBtn" onClick={this.handleBtnClick}>
            添加
          </Button>

          {/* 把index和item以及函数传给子组件 */}
          <ul className="itemBox">{this.getTodoItem()}</ul>
        </div>
      </Fragment>
    );
  }

  getTodoItem() {
    return (
      <TodoItem
        list={this.state.list}
        deleteItem={this.handleItemDelete}
      />
    );
  }

  handleInputChange(e) {
    // 改变数据，向里面传入对象
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }

  handleEnterInput(e) {
    if (e.keyCode == "13" && !this.state.inputValue == "") {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      });
    } else if (e.keyCode == "13" && this.state.inputValue == "") {
      alert("不能为空");
    }
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list,
    });
  }
}

export default TodoList;
