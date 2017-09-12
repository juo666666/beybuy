import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './root/app.component';
import {MainComponent} from './main/main.component';
import {ListItemComponent} from './list-item/list-item.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PersonalCenterComponent} from './personal-center/personal-center.component';
import {PublishComponent} from './publish/publish.component';
import {AskBuyComponent} from './ask-buy/ask-buy.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {SearchComponent} from './search/search.component'

import {DatasComponent} from './datas/datas.component';
import {PipesComponent} from './pipes/pipes.component';

import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemComponent,
    LoginComponent,
    RegisterComponent,
    PersonalCenterComponent,
    PublishComponent,
    AskBuyComponent,
    PageNoFoundComponent,
    SearchComponent,
    PipesComponent,
    DatasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
