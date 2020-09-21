# 熟悉react

### 基础的todoList练习，熟悉react生命周期，父子组件定义及传值

### 引入antd以及less

### React生命周期函数

```
componentDidMount
在第一次DOM渲染后调用

componentWillReceiveProps
在组件接收到一个新的prop时被调用。在初始化render时不会被调用

shouldComponentUpdate
在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用

componentWillUpdate
组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用

componentDidUpdate
组件完成更新后立即调用。在初始化时不会被调用

componentWillUnmount
组件从 DOM 中移除的时候立刻被调用
```
