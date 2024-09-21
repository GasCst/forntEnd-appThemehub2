import { Component } from '@angular/core';
import { ListCustomerThemeComponent } from '../../components/list-customer-theme/list-customer-theme.component';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrl: './customer-component.component.scss',
  standalone: true,
  imports: [ListCustomerThemeComponent],
})
export class CustomerComponentComponent {

}
