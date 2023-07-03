import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './../../validators/email.validator';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { IUser } from 'src/app/interfaces/user-login.model';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public form: FormGroup;
  public newUser: any = {};
  // Aqui preciso ver melhor
  private user: IUser = {
    userId: '001',
    email: 'pat@uol.com.br',
    password: '12345678',
  };

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  public onSubmit(): void {
    if (this.form.valid) {
      // this.router.navigate(['/dashboard']);
      // this.newAccount();
      //, { id: 123 }
      this.authService.login(this.user);
      localStorage.setItem(
        'userData',
        JSON.stringify({ email: this.user.email, id: this.user.id })
      );
      // localStorage.getItem({ email: this.user.email, id: this.user.id })
    }

    // Auth Service
    console.log(this.form.value as IUser);
    // console.log(this.user);
    // this.authService.login(this.user);
  }

  public newAccount(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
    });
  }

  public forgotPassword(): void {
    console.log('Será encaminhado um link para o email `{user.email}`');
    // new user
    this.router.navigate(['/']);
  }
}
