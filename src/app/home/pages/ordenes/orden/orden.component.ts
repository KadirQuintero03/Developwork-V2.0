import { Component, Input, OnInit } from '@angular/core';
import { ordenes_matenimiento } from '@/app/Interface/ordenes_mantenimiento';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  @Input() orden :ordenes_matenimiento= new ordenes_matenimiento();
  constructor(){
  }
  ngOnInit(): void {
      console.log(this.orden);
  }

}
