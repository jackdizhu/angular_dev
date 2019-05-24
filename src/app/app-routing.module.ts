import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { Page } from './page/app.component';
import { Component1 } from './component.1/app.component';
import { Page1 } from './page.1/app.component';
import { Page2 } from './page.2/app.component';
import { Page404 } from './page404/app.component';

// 路由配置
const routes: Routes = [
  { path: '', component: Page, 
    children: [
      { path: 'home1', component: Page1 },
      { path: 'home2', component: Page2 }
    ]
  },
  {
    path: '404', component: Page404
  },
  {path: '**', redirectTo: '404'} // 未匹配到路由 跳转到 404
];

@NgModule({
  declarations: [ // 声明在该模块中有哪些东西（组件、指令、管道）
    Page,
    Page1,
    Page2,
    Page404,
    Component1
  ],
  imports: [RouterModule.forRoot(routes)], // 声明该模块需要正常运转时需要用到哪些模块(即：该模块依赖哪些其它模块)
  exports: [RouterModule]
  // providers: [], // 声明模块中的服务
  // bootstrap: [HelloWorldComponent] // 声明该模块的主组件
})
export class AppRoutingModule {}
