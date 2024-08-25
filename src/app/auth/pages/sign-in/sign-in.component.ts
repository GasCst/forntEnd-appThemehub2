import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  private _router = inject(Router);
  public hide: boolean = true;
  public msgError!: string;
  public frmSingIn!: FormGroup;
  @ViewChild('password') password!: ElementRef;
  constructor(private _title: Title, private _formBuilder: FormBuilder) {
    console.log('crce constructor -> {}');
  }

  ngOnInit(): void {
    // [formGroup]="frmSingIn" autocomplete="off"
    this.frmSingIn = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      idSubsidiary: ['', [Validators.required]],
    });
    console.log('crce ngOnInit -> {} ' + this._title);
  }
  public getIcon(): string {
    return this.hide ? 'visibility' : 'visibility_off';
  }

  public onSignIn(): void {
    this._router.navigate(['home/dashboard']);
  }
    

}
