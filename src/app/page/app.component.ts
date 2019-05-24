import { Component } from '@angular/core';

@Component({
  selector: 'Page', // 使用组件时的标签 组件唯一
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class Page {
  title = 'router-outlet Page';
}
