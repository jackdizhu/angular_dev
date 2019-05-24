## Angular7

* 开发遇到问题 component

```js
  // app.component.ts 文件问题
  selector: 'Page1', // 使用组件时的标签 组件唯一
  // app-routing.module.ts 文件问题
  declarations: [ // 声明在该模块中有哪些东西（组件、指令、管道）
  // app.component.html
  (click)="onCliekTitle()" // click事件绑定 onCliekTitle() 必须加括号执行
  // 父子组件传值
  // 父组件 title 指 this.title
  [propTitle]="title"
  // 子组件
  @Input()
  propTitle: String;
  // 父组件监听子组件自定义事件
  // 父组件
  (emitChange)="onEmitChange($event)"
  // 子组件 emitChange 事件 'change' 传递参数
  @Output()
  emitChange = new EventEmitter<string>()
  ...
  this.emitChange.emit('change')
```