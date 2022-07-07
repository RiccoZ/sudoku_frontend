import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokutableComponent } from './sudokutable.component';

describe('SudokutableComponent', () => {
  let component: SudokutableComponent;
  let fixture: ComponentFixture<SudokutableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokutableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
