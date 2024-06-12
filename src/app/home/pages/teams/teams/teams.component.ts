import { Component, OnInit } from '@angular/core';
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
  visibilityMT: boolean = false;
  style: string = 'Activo';

  constructor(private serviceteam: TeamservService) {}

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

  modTeam(newValue: boolean) {
    this.serviceteam.setEquipo(this.equipoSelect);
    this.visibilityMT = newValue;
  }
}
