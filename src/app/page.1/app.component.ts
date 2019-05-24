import { Component } from '@angular/core';

@Component({
  selector: 'Page1', // 使用组件时的标签 组件唯一
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class Page1 {
  title = 'Page 1';
}
