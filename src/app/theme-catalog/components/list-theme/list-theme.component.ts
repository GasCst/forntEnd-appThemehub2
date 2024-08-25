import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddThemeComponent } from '../add-theme/add-theme.component';


export interface Theme {
  id?: number;
  description?: string;
}

const ELEMENT_DATA: Theme[] = [
  { id: 1, description: ' test theme 1 ' },
  { id: 2, description: ' test theme 2 ' },
  { id: 3, description: ' test theme 3 ' },
  { id: 4, description: ' test theme 4 ' },
  { id: 5, description: ' test theme 5 ' }
];

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrl: './list-theme.component.scss'
})
export class ListThemeComponent {

  public title!: string;
  public lstDataSource!: MatTableDataSource<any>;
  public lstColumnsTable: string [] = ['ID', 'DESCRIPTION', 'SELECT'];
  public totalElements!: number;

  constructor(
    private _dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.title = 'Catalogo Temi';
    this.lstDataSource = new MatTableDataSource(ELEMENT_DATA);
    this.totalElements = ELEMENT_DATA.length;
  }

  public onCreate( row?: Theme ): void {

    

    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.disableClose = true;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.data = row;

    const _dialogRef = this._dialog.open(AddThemeComponent, _dialogConfig);

    _dialogRef.afterClosed().subscribe( result => {
      console.log(result);
    })
  }

}
