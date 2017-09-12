import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublishComponent } from './my-publish.component';

describe('MyPublishComponent', () => {
  let component: MyPublishComponent;
  let fixture: ComponentFixture<MyPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
