import { Component } from '@angular/core';
import{ environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appThemehub2';

  constructor() {
    console.log(' environment -> {} '+ environment.name);
  }
}
