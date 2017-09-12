import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySaleComponent } from './my-sale.component';

describe('MySaleComponent', () => {
  let component: MySaleComponent;
  let fixture: ComponentFixture<MySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
