import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NewsService } from './components/news-list/news.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [ NewsService ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
