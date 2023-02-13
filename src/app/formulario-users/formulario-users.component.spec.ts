import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsersComponent } from './formulario-users.component';

describe('FormularioUsersComponent', () => {
  let component: FormularioUsersComponent;
  let fixture: ComponentFixture<FormularioUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
