import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalAreaComponent } from './profissional-area.component';

describe('ProfissionalAreaComponent', () => {
  let component: ProfissionalAreaComponent;
  let fixture: ComponentFixture<ProfissionalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
