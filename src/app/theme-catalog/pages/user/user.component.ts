import { Component } from '@angular/core';
import { ListUserComponent } from '../../components/list-user/list-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
  imports: [ListUserComponent],
})
export class UserComponent {

}
