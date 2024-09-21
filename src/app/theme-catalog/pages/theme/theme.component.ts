import { Component } from '@angular/core';
import { ListThemeComponent } from '../../components/list-theme/list-theme.component';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
  standalone: true,
  imports: [ListThemeComponent],
})
export class ThemeComponent {
  
}
