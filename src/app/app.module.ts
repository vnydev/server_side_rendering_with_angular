import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './material';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsService } from './components/news-list/news.service';
import { NewsLineChartComponent } from './components/news-line-chart/news-line-chart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewsModule } from './components/news-list/news.module';

@NgModule({
  declarations: [
    AppComponent,
    // NewsListComponent,
    // NewsLineChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    // AngularMaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
