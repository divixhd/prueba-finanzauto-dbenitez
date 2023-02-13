import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.scss']
})
export class DetalleUserComponent implements OnInit {
  idSelected = null;
  formUser: FormGroup;
  constructor(    private router: Router,
    private _users:UsuariosService,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.idSelected = params['id'];
        this.loadInfoForEdit(this.idSelected);
      }
    });
  }
  loadInfoForEdit(id?: any) {
    this._users.readInfoUser(id).subscribe((resp:any)=>{
      this.formUser.get('idUser').setValue(resp.id);
      this.formUser.get('titulo').setValue(resp.title);
      this.formUser.get('nombres').setValue(resp.firstName);
      this.formUser.get('apellidos').setValue(resp.lastName);
      this.formUser.get('imagen').setValue(resp.picture);
      this.formUser.get('genero').setValue(resp.gender);
      this.formUser.get('correo').setValue(resp.email);
      this.formUser.get('fechaNacimiento').setValue(resp.dateOfBirth);
      this.formUser.get('telefono').setValue(resp.phone);
      this.formUser.disable();
    });
  }
  createForm() {
    this.formUser = this.fb.group({
      idUser: [''],
      titulo: [''],
      nombres: [''],
      apellidos: [''],
      imagen: [''],
      genero: [''],
      correo: [''],
      fechaNacimiento: [''],
      telefono: [''],
    });
  }
  cancelar(){
    this.router.navigate(['']);
  }
}
