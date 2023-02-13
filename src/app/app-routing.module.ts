import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUserComponent } from './detalle-user/detalle-user.component';
import { FormularioUsersComponent } from './formulario-users/formulario-users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: FormularioUsersComponent },
  { path: 'editar/:id', component: FormularioUsersComponent },
  { path: 'detalle/:id', component: DetalleUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
