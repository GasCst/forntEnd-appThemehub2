import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../shared/shared.module';


export interface Category {
  id?: number;
  name?: string;
  description?: string;
}

const ELEMENT_DATA: Category[] = [
  { id: 1, name:'category-1', description: ' test category 1 ' },
  { id: 2, name:'category-2', description: ' test category 2 ' },
  { id: 3, name:'category-3', description: ' test category 3 ' },
  { id: 4, name:'category-4', description: ' test category 4 ' },
  { id: 5, name:'category-5', description: ' test category 5 ' }
];

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss',
  standalone: true,
  imports: [CommonModule, SharedModule,MaterialModule, ReactiveFormsModule, FormsModule],
})
export class ListCategoryComponent {

  

  public title!: string;
  public lstDataSource!: MatTableDataSource<any>;
  public lstColumnsTable: string [] = ['ID','NAME', 'DESCRIPTION', 'SELECT'];
  public totalElements!: number;

  constructor(
    private _dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.title = 'Catalogo Categorie';
    this.lstDataSource = new MatTableDataSource(ELEMENT_DATA);
    this.totalElements = ELEMENT_DATA.length;
  }

  public onCreate( row?: Category ): void {

    

    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.disableClose = true;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.data = row;

    const _dialogRef = this._dialog.open(AddCategoryComponent, _dialogConfig);

    _dialogRef.afterClosed().subscribe( result => {
      console.log(result);
    })
  }

}
