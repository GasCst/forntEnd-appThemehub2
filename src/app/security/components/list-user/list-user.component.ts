import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material.module';
import { FirstUpperPipe } from '../../../shared/pipe/first-upper.pipe';


export interface User {
  identifier?: string;
  fullName?: string;
  email?: string;
  state?: string;
}

const ELEMENT_DATA: User[] = [
  {
    identifier: 'pbautistac',
    fullName: 'pablito bautista',
    email: 'pablito@gmail.com',
    state: 'activo',
  },
  {
    identifier: 'avilcad',
    fullName: 'abelardo vilca',
    email: 'avilca@gmail.com',
    state: 'activo',
  },
  {
    identifier: 'ctucnoc',
    fullName: 'cristian tucno',
    email: 'ctucnoc@gmail.com',
    state: 'activo',
  },
  {
    identifier: 'eramirezm',
    fullName: 'erder ramirez',
    email: 'eramirez@gmail.com',
    state: 'activo',
  },
  {
    identifier: 'agamboam',
    fullName: 'abelito gamboa',
    email: 'agamboam@gmail.com',
    state: 'activo',
  },
  {
    identifier: 'jcarbajals',
    fullName: 'jhoni carbajal',
    email: 'jcarbajals@gmail.com',
    state: 'activo',
  },
];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    FirstUpperPipe,
  ],
})
export class ListUserComponent {
  public lstMatDataSource!: MatTableDataSource<any>;
  public lstColumsTable: string[] = [
    'USUARIO',
    'NOMBRE COMPLETO',
    'EMAIL',
    'ESTADO',
    'SELECCIONE',
  ];

  public searchKey!: string;
  public title!: string;
  public pageSize: number = 5;
  public totalElements!: number;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.title = 'Seguridad';
    this.findByUser();
  }

  onCreater(row?: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = row;
    const dialogoRef = this._dialog.open(AddUserComponent, dialogConfig);
    dialogoRef.afterClosed().subscribe((rpta) => {
      console.log(rpta);
    });
  }

  public findByUser(): void {
    this.lstMatDataSource = new MatTableDataSource(ELEMENT_DATA);
    this.lstMatDataSource.sort = this.matSort;
    this.lstMatDataSource.paginator = this.matPaginator;
    this.totalElements = ELEMENT_DATA.length;
  }
}
