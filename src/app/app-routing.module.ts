import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { usersComponent } from '../app/home/users.component';
import { LoginComponent } from '../app/home/pages/login/login.component';
import { TeamsComponent } from '../app/home/pages/teams/teams/teams.component';
import { InformationComponent } from './home/pages/users/infoUser/information.component';
import { OrdenesMComponent } from './home/pages/ordenes/ordenes-m/ordenes-m.component';
import { ListarComponent } from './home/pages/users/listUser/listar.component';

// import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'user',
        component: usersComponent,
        children: [
          {
            path: '',
            component: OrdenesMComponent,
          },
          {
            path: 'list',
            component: ListarComponent,
          },
          {
            path: 'teams',
            component: TeamsComponent,
          },
          {
            path: 'information',
            component: InformationComponent,
          },
        ],
        // canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
