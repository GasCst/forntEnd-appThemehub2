import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';

export interface User{
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  state?: string;
}

const ELEMENT_DATA: User[] = [
  { id:1, username:"nico", email:"c@gmail.com", password:"123456", firstName:"nico", lastName:"cado",company:"test", state:"1"},
  { id:2, username:"admin", email:"a@gmail.com", password:"123456", firstName:"admin", lastName:"admin",company:"test", state:"1"},
  { id:3, username:"user", email:"u@gmail.com", password:"123456", firstName:"user", lastName:"user",company:"test", state:"1"},
  { id:4, username:"test", email:"t@gmail.com", password:"123456", firstName:"test", lastName:"test", company:"test",state:"1"},
  { id:5, username:"demo", email:"d@gmail.com", password:"123456", firstName:"demo", lastName:"demo", company:"test", state:"1"},
  { id:6, username:"test1", email:"t1@gmail.com", password:"123456", firstName:"test1", lastName:"test1", company:"test", state:"1"}
];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  
  public title!: string;
  public lstDataSource!: MatTableDataSource<any>;
  public lstColumnsTable: string [] = ['ID', 'USERNAME','EMAIL','PASSWORD','FIRSTNAME','LASTNAME','COMPANY','STATE', 'SELECT'];
  public totalElements!: number;

  constructor(
    private _dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.title = 'Catalogo Utenti';
    this.lstDataSource = new MatTableDataSource(ELEMENT_DATA);
    this.totalElements = ELEMENT_DATA.length;
  }

  public onCreate( row?: User ): void {

    

    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.disableClose = true;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.data = row;

    const _dialogRef = this._dialog.open(AddUserComponent, _dialogConfig);

    _dialogRef.afterClosed().subscribe( result => {
      console.log(result);
    })
  }
}
