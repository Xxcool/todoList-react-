import React, { Component } from "react";
import { Button } from "antd";
import { List } from "antd";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    // 子组件通过this.props.item
    const list = this.props.list;
    console.log(list);
    return (
      <List
        size="small"
        bordered
        dataSource={list}
        renderItem={(item, index) => {
          return (
            <List.Item>
              {item}
              <Button
                className="fr"
                type="primary"
                shape="circle"
                size="small"
                onClick={() => {
                  this.handleClick(index);
                }}
              >X</Button>
            </List.Item>
          );
        }}
      />
    );
  }

  handleClick(index) {
    // 调用父组件函数
    const { deleteItem } = this.props;
    deleteItem(index);
  }
}

export default TodoItem;
