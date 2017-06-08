import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasListComponent } from './vendas-list.component';

describe('VendasListComponent', () => {
  let component: VendasListComponent;
  let fixture: ComponentFixture<VendasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
