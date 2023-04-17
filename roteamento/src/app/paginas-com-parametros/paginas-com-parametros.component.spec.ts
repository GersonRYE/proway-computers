import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasComParametrosComponent } from './paginas-com-parametros.component';

describe('PaginasComParametrosComponent', () => {
  let component: PaginasComParametrosComponent;
  let fixture: ComponentFixture<PaginasComParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginasComParametrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasComParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
