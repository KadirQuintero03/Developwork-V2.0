import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '@/app/interface/equipo';
import { TeamservService } from '@/app/services/teamserv.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
})

export class TeamsComponent implements OnInit {
  equipoSelect: equipo = new equipo();
  verequipo: equipo[] = [];

  constructor(
    private router: Router,
    private serviceteam: TeamservService,
  ) {}

  ngOnInit(): void {
    // this.serviceteam.getData().subscribe((Response: equipo[]) => {
    //   this.verequipo = Response;
    // });
    // this.serviceestado.getData().subscribe((Response: any) => {
    //   this.verestado = Response.data.estados;
    // });
  }

  modEquipo() {
    console.log(this.equipoSelect);
    this.serviceteam.setEquipo(this.equipoSelect);
    this.router.navigate(['user/modEquipo']);
  }
}
