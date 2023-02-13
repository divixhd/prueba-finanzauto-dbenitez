import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-formulario-users',
  templateUrl: './formulario-users.component.html',
  styleUrls: ['./formulario-users.component.scss']
})
export class FormularioUsersComponent implements OnInit {
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
      this.formUser.get('titulo').setValue(resp.title);
      this.formUser.get('nombres').setValue(resp.firstName);
      this.formUser.get('apellidos').setValue(resp.lastName);
      this.formUser.get('imagen').setValue(resp.picture);
      this.formUser.get('genero').setValue(resp.gender);
      this.formUser.get('correo').setValue(resp.email);
      this.formUser.get('fechaNacimiento').setValue(resp.dateOfBirth);
      this.formUser.get('telefono').setValue(resp.phone);
    });
  }
  createForm() {
    this.formUser = this.fb.group({
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
  guardar(){
    if(this.idSelected==null){
      const obj = {
        "title" : this.formUser.value.titulo,
        "firstName" : this.formUser.value.nombres,
        "lastName" : this.formUser.value.apellidos,
        "gender" : this.formUser.value.genero,
        "email" : this.formUser.value.correo,
        "dateOfBirth" : this.formUser.value.fechaNacimiento,
        "phone" : this.formUser.value.telefono,
        "picture" : this.formUser.value.imagen //https://randomuser.me/api/portraits/med/women/28.jpg
     }
     this._users.createUser(obj).subscribe((response:any)=>{
       console.log(response);
       alert('Usuario registrado con exito')
       this.router.navigate(['']);
     });
    }
    else{
      const obj = {
        "id" : this.idSelected,
        "title" : this.formUser.value.titulo,
        "firstName" : this.formUser.value.nombres,
        "lastName" : this.formUser.value.apellidos,
        "gender" : this.formUser.value.genero,
        "email" : this.formUser.value.correo,
        "dateOfBirth" : this.formUser.value.fechaNacimiento,
        "phone" : this.formUser.value.telefono,
        "picture" : this.formUser.value.imagen //https://randomuser.me/api/portraits/med/women/28.jpg
     }
     this._users.editUser(obj,this.idSelected).subscribe((response:any)=>{
       console.log(response);
       alert('Usuario actualizado con exito')
       this.router.navigate(['']);
     });
    }

  }
  cancelar(){
    this.router.navigate(['']);
  }
}
