import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'Component1', // 使用组件时的标签 组件唯一
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class Component1 {
  title = 'router-outlet Component1';
  @Input()
  propTitle: String;
  @Output()
  emitChange = new EventEmitter<string>()

  onClickSpan () {
    console.log("emitChange.emit('change')")
    this.emitChange.emit('change')
  }
}
