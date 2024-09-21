import { Component } from '@angular/core';
import { ListCategoryComponent } from '../../components/list-category/list-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  standalone: true,
  imports: [ListCategoryComponent],
})
export class CategoryComponent {

}
