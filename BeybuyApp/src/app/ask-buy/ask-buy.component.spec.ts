import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskBuyComponent } from './ask-buy.component';

describe('AskBuyComponent', () => {
  let component: AskBuyComponent;
  let fixture: ComponentFixture<AskBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
