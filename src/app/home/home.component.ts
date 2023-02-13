import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formModal: any;
  listaUsuarios: any[] = [];
  idTemp;
  constructor(private _users:UsuariosService, private router: Router ) { }

  ngOnInit(){
    this._users.getUsers().subscribe((data:any)=>{
      console.log(data);
      this.listaUsuarios = data.data;
    })
  }
  createUser(){
    this.router.navigate(['/crear']);
  }
  editUser(id:any){
    this.router.navigate(['/editar',id]);
  }
  detailUser(id:any){
    this.router.navigate(['/detalle',id]);
  }
  deleteUser(id:any){
    this.idTemp = id;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.formModal.show();

  }
  deleteService(id?:any){
    this._users.deleteUser(this.idTemp).subscribe((data:any)=>{
      this.formModal.hide();
      alert('Usuario eliminado con éxito');
      this.idTemp = '';
      this.listaUsuarios = [];
      this.ngOnInit();
    })

  }
}
