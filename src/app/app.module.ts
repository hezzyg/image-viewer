import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpService} from './core/http.service';
import {HttpClientModule} from '@angular/common/http';
import {MasterViewComponent} from './components/master-view/master-view.component';
import {DetailViewComponent} from './components/detail-view/detail-view.component';
import {ThumbnailComponent} from './components/thumbnail/thumbnail.component';
import {FormsModule} from '@angular/forms';
import {InfoComponent} from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent,
    DetailViewComponent,
    ThumbnailComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
