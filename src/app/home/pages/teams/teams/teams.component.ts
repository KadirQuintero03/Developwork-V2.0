import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '@/app/interface/equipo';
import { TeamservService } from '@/app/services/teamserv.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  equipoSelect: equipo = new equipo();
  verequipo: equipo[] = [];
  visibilityRT: boolean = false;
  test: string = 'Activo';

  constructor(private router: Router, private serviceteam: TeamservService) {}

  ngOnInit(): void {
    this.serviceteam.getData().subscribe((Response: any) => {
      if (Response) {
        this.verequipo = Response.data;
      }
    });
  }

  newTeam(newValue: boolean) {
    this.visibilityRT = newValue;
  }

  modEquipo() {
    console.log(this.equipoSelect);
    this.serviceteam.setEquipo(this.equipoSelect);
    this.router.navigate(['user/modEquipo']);
  }
}
