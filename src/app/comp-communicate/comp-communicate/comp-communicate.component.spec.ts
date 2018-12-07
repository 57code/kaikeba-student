import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCommunicateComponent } from './comp-communicate.component';

describe('CompCommunicateComponent', () => {
  let component: CompCommunicateComponent;
  let fixture: ComponentFixture<CompCommunicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCommunicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
