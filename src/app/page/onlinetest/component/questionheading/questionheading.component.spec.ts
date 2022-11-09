import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionheadingComponent } from './questionheading.component';

describe('QuestionheadingComponent', () => {
  let component: QuestionheadingComponent;
  let fixture: ComponentFixture<QuestionheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionheadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
