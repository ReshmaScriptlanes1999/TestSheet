import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptlanesheadingComponent } from './scriptlanesheading.component';

describe('ScriptlanesheadingComponent', () => {
  let component: ScriptlanesheadingComponent;
  let fixture: ComponentFixture<ScriptlanesheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptlanesheadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptlanesheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
