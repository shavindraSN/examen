import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HistoryModule } from './history/history.module';
import { LoginModule } from './login/login.module';
import { PaperModule } from './paper/paper.module';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(routes), 
    AboutModule, 
    HomeModule, 
    HistoryModule, 
    LoginModule,
    PaperModule, 
    SharedModule.forRoot()
    ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
