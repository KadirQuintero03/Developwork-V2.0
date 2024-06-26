import { NgModule, importProvidersFrom} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from './services/socket.service';
import { NgClass } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/pages/login/login.component';
import { usersComponent } from './home/users.component';
import { registerComponent } from './home/pages/users/registerUser/register.component';
import { NotificationComponent } from './home/pages/notifications//notification.component';
import { NavComponent } from './shared/nav/nav.component';
import { TeamsComponent } from './home/pages/teams/teams/teams.component';
import { InformationComponent } from './home/pages/users/infoUser/information.component';
import { TeamservService } from './services/teamserv.service';
import { CambContraComponent } from './home/pages/changePass/camb-contra.component';
import { ModpersonaComponent } from './home/pages/users/modUser/modpersona.component';
import { ModequipoComponent } from './home/pages/teams/modequipo/modequipo.component';
import { OrdenesMComponent } from './home/pages/ordenes/ordenes-m/ordenes-m.component';
import { OrdenComponent } from './home/pages/ordenes/orden/orden.component';
import { FordenComponent } from './home/pages/ordenes/forden/forden.component';
import { ListarComponent } from './home/pages/users/listUser/listar.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterTeamComponent } from './home/pages/teams/registerTeam/registerTeam.component';

const config: SocketIoConfig = {
  url: 'http://191.88.249.172:3002',
  options: {},
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    usersComponent,
    registerComponent,
    NotificationComponent,
    NavComponent,
    TeamsComponent,
    InformationComponent,
    CambContraComponent,
    ModpersonaComponent,
    ModequipoComponent,
    OrdenesMComponent,
    OrdenComponent,
    FordenComponent,
    ListarComponent,
    HeaderComponent,
    RegisterTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgClass,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    TeamservService,
    importProvidersFrom(HttpClientModule),
    SocketService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
