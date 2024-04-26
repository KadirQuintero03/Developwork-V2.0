import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { usersComponent } from '../app/home/users.component';
import { LoginComponent } from '../app/home/pages/login/login.component';
import { NavComponent } from '../app/shared/nav/nav.component';
import { TeamsComponent } from '../app/home/pages/teams/teams/teams.component';
import { NotificationComponent } from '../app/home/pages/notifications/notification.component';
import { registerComponent } from '../app/home/pages/registerUser/register.component';
import { CambContraComponent } from '../app/home/pages/changePass/camb-contra.component';
import { ModpersonaComponent } from './home/pages/persons/modpersona/modpersona.component';
import { InformationComponent } from './home/pages/infoUser/information.component';
import { ModequipoComponent } from './home/pages/teams/modequipo/modequipo.component';
import { OrdenesMComponent } from './home/pages/ordenes/ordenes-m/ordenes-m.component';
import { ListarComponent } from './home/pages/list/listar.component';

//import { AuthGuard } from './Services/auth.guard';
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
            path: 'register',
            component: registerComponent,
          },
          {
            path: 'list',
            component: ListarComponent,
          },
          { path: 'nav', component: NavComponent },
          {
            path: 'teams',
            component: TeamsComponent,
          },
          {
            path: 'information',
            component: InformationComponent,
          },
          { path: 'cambcontraseña', component: CambContraComponent },
          { path: 'notification', component: NotificationComponent },
          {
            path: 'modPersona',
            component: ModpersonaComponent,
          },
          { path: 'modEquipo', component: ModequipoComponent },
        ],
        //canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
