import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogisticsComponent } from './my-logistics.component';

describe('MyLogisticsComponent', () => {
  let component: MyLogisticsComponent;
  let fixture: ComponentFixture<MyLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
