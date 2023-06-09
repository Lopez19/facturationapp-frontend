import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegistroComponent } from './pages/registro/registro.component';
import { EditComponent } from './pages/edit/edit.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { VerComponent } from './pages/ver/ver.component';

const router: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nuevo',
        component: RegistroComponent,
      },
      {
        path: 'editar/:id',
        component: EditComponent,
      },
      {
        path: 'viewAll',
        component: PrincipalComponent,
      },
      {
        path: 'ver/:id',
        component: VerComponent,
      },
      {
        path: '**',
        redirectTo: 'viewAll',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
