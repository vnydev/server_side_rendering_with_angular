import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { NewsModel } from './news.model';
import SampleData from './sample';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [NewsService]
    });
    service = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify()
  })

  it('NewsService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive news list from the API vai GET', ()=>{
    let page = 1;
    let tag = "story";
    const dummyData:NewsModel = SampleData;

    service.getNewsList(page, tag).subscribe(data =>{
        expect(data).toEqual(dummyData);
    })

    const request = httpMock.expectOne(service.urlNewsList + `?page=${page}&tags=${tag}`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyData);
    
  })
});
