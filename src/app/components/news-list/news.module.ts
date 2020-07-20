import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsLineChartComponent } from '../news-line-chart/news-line-chart.component';
import { NewsService } from './news.service';
import { AngularMaterialModule } from '../../material';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: "", component: NewsListComponent}
  ];

@NgModule({
    declarations: [
        NewsListComponent,
        NewsLineChartComponent
    ],
    imports: [ 
        CommonModule,
        AngularMaterialModule,
        RouterModule.forChild(routes)
     ],
    exports: [],
    providers: [NewsService],
})
export class NewsModule {}