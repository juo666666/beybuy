/**
 * Created by juo on 2017/9/12.
 */
//导入模块
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {MainComponent} from './main/main.component';
import {ListItemComponent} from './list-item/list-item.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PersonalCenterComponent} from './personal-center/personal-center.component';
import {PublishComponent} from './publish/publish.component';
import {AskBuyComponent} from './ask-buy/ask-buy.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {SearchComponent} from './search/search.component'

//配置路由表
const routes:Routes = [
  {
    path: 'main',
    component: MainComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
   {
    path: 'personal-center',
    component: PersonalCenterComponent
  },
   {
    path: 'list-item',
    component: ListItemComponent
  },
  {
    path: 'publish',
    component: PublishComponent
  },
  {
    path: 'ask-buy',
    component: AskBuyComponent
  },
   {
    path: 'other',
    component: PageNoFoundComponent
  },

  // {
  //   path: '',
  //   redirectTo: '/main',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: PageNoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {
}
