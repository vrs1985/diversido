import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrumbsbreadComponent } from './crumbsbread.component';

describe('CrumbsbreadComponent', () => {
  let component: CrumbsbreadComponent;
  let fixture: ComponentFixture<CrumbsbreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrumbsbreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrumbsbreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
