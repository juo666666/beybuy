import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGetComponent } from './my-get.component';

describe('MyGetComponent', () => {
  let component: MyGetComponent;
  let fixture: ComponentFixture<MyGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
