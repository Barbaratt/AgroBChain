import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './../../validators/email.validator';
import { UserService } from 'src/services/user.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Location } from '@angular/common';

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
  public novoUsuario: any = {};

  constructor(
    public dialog: MatDialog,
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  public onSubmit(): void {
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
      // this.newAccount();
      //, { id: 123 }
    }
  }

  public newAccount(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
    });
    //   DialogOverviewExampleDialog, {
    //   data: { name: this.name, animal: this.animal },
    // }

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('tá no login');
    //   this.location.back();
    // });
  }

  public forgotPassword(): void {
    console.log('Será encaminhado um link para o email `{user.email}`');
    // new user
    this.router.navigate(['/']);
  }
}
