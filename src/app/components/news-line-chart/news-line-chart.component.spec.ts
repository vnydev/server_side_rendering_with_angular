import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLineChartComponent } from './news-line-chart.component';

describe('NewsLineChartComponent', () => {
  let component: NewsLineChartComponent;
  let fixture: ComponentFixture<NewsLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
