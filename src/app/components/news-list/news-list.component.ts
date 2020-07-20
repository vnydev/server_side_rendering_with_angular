import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { NewsService } from './news.service';
import { NewsObjectModel, NewsModel} from './news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit, OnDestroy, AfterViewChecked {

  displayedColumns: string[] = ['Comments', 'Vote Count', 'UpVote', 'News Details'];
  dataSource: NewsObjectModel[];
  currentDataSet: NewsModel;
  page:number = 1;
  tags:string = "story"
  x_chartData:any[];
  y_chartData:any[];
  isLoading:boolean = false

  constructor(private newsService: NewsService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    if(window){
      let source:any = window.localStorage.getItem('source');
      if(source && source && typeof source === 'string'){
        source = JSON.parse(source);
        this.currentDataSet = source;
        
        this.page = source.page;
        this.setData(source.hits)
      }else{
        this.getList();
      }
    }else{
      this.getList();
    }
   
  }

  ngOnDestroy(){
    if(localStorage){
      localStorage.setItem("source", JSON.stringify(this.currentDataSet))
    }
  }

  ngAfterViewChecked(){
    if(localStorage && typeof this.currentDataSet === "object"){
      localStorage.setItem("source", JSON.stringify(this.currentDataSet))
    }
  }

  getList(){
    this.isLoading = true;
    this.newsService.getNewsList(this.page, this.tags)
    .subscribe(data => {
      this.currentDataSet = data;
      this.setData(data.hits);
      this.isLoading = false;
    })
  }

  setData(hits: NewsObjectModel[]){
    this.dataSource = [...hits];
    this.x_chartData = hits.map(i => i.objectID)
    this.y_chartData = hits.map(i => i.points)
    this.isLoading = false;
    this.ref.detectChanges();
  }

  upVote(story: NewsObjectModel){
    
    let newDataSet =  this.currentDataSet.hits.map(i => {
      if(i.objectID === story.objectID){
        i.points += 1;
      }
      return i
    })

    this.setData(newDataSet);
  }

  removeStory(story: NewsObjectModel, index:number){
    this.isLoading = true;
    this.currentDataSet.hits.splice(index,1);
    this.setData(this.currentDataSet.hits);
  }

  printHost(url: string){

    if(!url){
      return ""
    }
    let domain = url.split('/')[2];
    return domain;
  }

  getHours(newsDate: Date){

    if(!newsDate){
      return 0;
    }

    let dt1 = new Date();
    let dt2 = new Date(newsDate)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    let hours = Math.abs(Math.round(diff));

    if(hours > 24){
      let days = hours / 24;
      return Math.ceil(days) + ' days ago'
    }else{
      return hours + ' hours ago';
    }
  }

  previousPage(){
    this.page = this.page - 1
    this.getList()
  }

  nextPage(){
    this.page = this.page + 1
    this.getList()
  }
}
