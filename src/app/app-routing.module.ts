import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: "", redirectTo: "/news", pathMatch: "full"},
  {path: "", component: AppComponent},
  {
    path: 'news', 
    loadChildren: () => import('./components/news-list/news.module').then(m => m.NewsModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
