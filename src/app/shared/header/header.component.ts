import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  visibility: boolean = false;

  changeVisibility(){
    this.visibility = !this.visibility
    console.log(this.visibility)
  }
}
