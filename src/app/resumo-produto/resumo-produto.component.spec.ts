import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoProdutoComponent } from './resumo-produto.component';

describe('ResumoProdutoComponent', () => {
  let component: ResumoProdutoComponent;
  let fixture: ComponentFixture<ResumoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
