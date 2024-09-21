import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigability',
  templateUrl: './navigability.component.html',
  styleUrls: ['./navigability.component.scss'],
})
export class NavigabilityComponent {
  @Input() title!: string;
  @Input() namePage!: string;
  @Input() subtitle!: string;
}
