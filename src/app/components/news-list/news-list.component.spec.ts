import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { NewsListComponent } from './news-list.component';
import { NewsService } from './news.service';
import { NewsModel } from './news.model';
import SampleData from './sample';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ NewsListComponent ],
      providers: [ NewsService ]
    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(NewsListComponent);
        component = fixture.componentInstance
    })

    service = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('News List component initialization', () => {

    it('should fetch news list method call OnInit vai GET', ()=>{
      expect(component.getList()).toBeUndefined();
    })

  });

});
