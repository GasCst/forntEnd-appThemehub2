import { Component } from '@angular/core';
import{ environment } from './../environments/environment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'appThemehub2';

  constructor() {
    console.log(' environment -> {} '+ environment.name);
  }
}
