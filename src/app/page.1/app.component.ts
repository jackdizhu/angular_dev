import { Component } from '@angular/core';

@Component({
  selector: 'Page1', // 使用组件时的标签 组件唯一
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class Page1 {
  title = 'Page 1';
  keys = '';

  onEmitChange (str: String) {
    console.log(str, 'onEmitChange')
  }
  onCliekTitle () {
    this.title = this.title + ' onCliek'
  }
  onKey (event: any) {
    this.keys = event.target.value
  }
  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件
  ngOnInit () {
    console.log('OnInit')
  }
  // 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应
  ngDoCheck () {
    console.log('DoCheck')
  }
  // 当 Angular 把外部内容投影进组件/指令的视图之后调用
  ngAfterContentInit () {
    console.log('AfterContentInit')
  }
  // 每当 Angular 完成被投影组件内容的变更检测之后调用
  ngAfterContentChecked () {
    console.log('AfterContentChecked')
  }
  // 当 Angular 初始化完组件视图及其子视图之后调用
  ngAfterViewInit () {
    console.log('AfterViewInit')
  }
  // 当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象
  ngOnChanges () {
    console.log('OnChanges')
  }
  // 每当 Angular 做完组件视图和子视图的变更之后调用
  ngAfterViewChecked () {
    console.log('AfterViewChecked')
  }
  // 每当 Angular 每次销毁之前调用
  ngOnDestroy () {
    console.log('OnDestroy')
  }
}
